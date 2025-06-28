import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Notes", path: "/notes" },
  ];

  return (
    <aside className="w-64 bg-emerald-600 text-white p-6 space-y-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">🧠 Praksul 12</h2>
      {menu.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className={`block px-4 py-2 rounded-xl transition 
            ${location.pathname === item.path ? "bg-emerald-700" : "hover:bg-emerald-500"}`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  );
}
