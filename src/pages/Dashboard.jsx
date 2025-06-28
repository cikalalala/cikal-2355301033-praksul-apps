import { useEffect, useState } from "react";
import { notesAPI } from "../services/notesAPI";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    try {
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      console.error("Gagal mengambil catatan:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>

      {/* Penjelasan materi praksul */}
      <div className="bg-white p-6 mb-10 rounded-xl shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
          🧠 Ringkasan Materi Praksul 12 - Backend as a Service (BaaS) dengan Supabase
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pada pertemuan ke-12 ini, kita mempelajari konsep penting dalam pengembangan aplikasi modern, yaitu <strong>Backend as a Service (BaaS)</strong>. BaaS adalah model layanan cloud yang menyediakan fungsionalitas backend secara otomatis, sehingga developer tidak perlu membangun backend dari awal. Layanan seperti <strong>database, autentikasi, storage, dan API</strong> bisa langsung digunakan dengan mudah.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Salah satu platform BaaS yang kita gunakan dalam praktikum ini adalah <strong>Supabase</strong>. Supabase adalah alternatif open-source dari Firebase yang menggunakan <strong>PostgreSQL</strong> sebagai basis datanya dan menyediakan antarmuka API yang siap digunakan. Kita bisa melakukan operasi <em>CRUD (Create, Read, Update, Delete)</em> hanya dengan mengatur tabel dan mengakses endpoint API yang telah disediakan.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dalam praktiknya, kita membangun aplikasi sederhana menggunakan React dan TailwindCSS, dengan fitur utama yaitu:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Membuat tabel <code>notes</code> di Supabase, dengan kolom <strong>id, title, content</strong></li>
          <li>Menyiapkan API Key dan URL dari project Supabase</li>
          <li>Menghubungkan React ke Supabase menggunakan library <code>axios</code></li>
          <li>Menampilkan daftar catatan, menambahkan catatan baru, dan menghapus catatan langsung dari frontend</li>
          <li>Semua operasi dilakukan secara real-time tanpa perlu backend tambahan</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Dengan menggunakan Supabase, kita bisa fokus pada pengembangan fitur-fitur aplikasi tanpa terbebani pengelolaan server atau konfigurasi database secara manual. Ini adalah keterampilan penting bagi seorang developer modern, khususnya saat mengembangkan MVP (Minimum Viable Product) atau proyek skala kecil hingga menengah dengan waktu terbatas.
        </p>
      </div>

      {/* Daftar Catatan */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">📒 Daftar Catatan</h2>

      {loading ? (
        <p className="text-gray-500">Memuat catatan...</p>
      ) : notes.length === 0 ? (
        <p className="text-gray-500">Belum ada catatan yang ditambahkan.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-4 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-emerald-700">
                {note.title}
              </h3>
              <p className="text-gray-700 mt-2">{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
