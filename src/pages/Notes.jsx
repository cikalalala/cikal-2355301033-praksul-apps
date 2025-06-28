import { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [dataForm, setDataForm] = useState({ title: "", content: "" });
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const loadNotes = async () => {
        setLoading(true);
        try {
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            alert("Gagal mengambil data!");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isEdit && editId !== null) {
                await notesAPI.updateNote(editId, dataForm);
                setIsEdit(false);
                setEditId(null);
            } else {
                await notesAPI.createNote(dataForm);
            }

            setDataForm({ title: "", content: "" });
            loadNotes();
        } catch (err) {
            alert("Gagal menyimpan catatan");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = confirm("Yakin ingin menghapus?");
        if (!confirmDelete) return;
        setLoading(true);
        try {
            await notesAPI.deleteNote(id);
            loadNotes();
        } catch (err) {
            alert("Gagal menghapus catatan");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (note) => {
        setDataForm({ title: note.title, content: note.content });
        setIsEdit(true);
        setEditId(note.id);
    };

    useEffect(() => {
        loadNotes();
    }, []);

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">📒 Notes</h1>
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <input
                    name="title"
                    value={dataForm.title}
                    onChange={handleChange}
                    placeholder="Judul"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    disabled={loading}
                />
                <textarea
                    name="content"
                    value={dataForm.content}
                    onChange={handleChange}
                    placeholder="Isi catatan"
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg"
                    disabled={loading}
                >
                    {loading
                        ? "Mohon tunggu..."
                        : isEdit
                        ? "Simpan Perubahan"
                        : "Tambah Catatan"}
                </button>
            </form>

            {loading ? (
                <p className="text-center text-gray-500">Memuat...</p>
            ) : notes.length === 0 ? (
                <p className="text-center text-gray-500">Belum ada catatan.</p>
            ) : (
                <div className="space-y-4">
                    {notes.map((note) => (
                        <div key={note.id} className="bg-white shadow p-4 rounded-xl border relative">
                            <h3 className="text-xl font-bold text-emerald-700">{note.title}</h3>
                            <p className="text-gray-700 mt-2">{note.content}</p>
                            <div className="absolute top-2 right-2 flex gap-2">
                                <button
                                    onClick={() => handleEdit(note)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(note.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
