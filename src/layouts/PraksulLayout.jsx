import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function PraksulLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
