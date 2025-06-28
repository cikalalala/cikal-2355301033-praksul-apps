import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header({ onSearch }) {
    return (
        <header className="flex justify-end items-center px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-6">
                {/* Notifikasi dan Ikon */}
                <div className="flex items-center gap-3">
                    <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
                        <FaBell className="text-green-600 text-lg" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
                            50
                        </span>
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
                        <FcAreaChart className="text-xl" />
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md transition">
                        <SlSettings className="text-gray-600 text-lg" />
                    </div>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pl-6 border-l border-gray-300">
                    <span className="text-sm text-gray-700">
                        Hello, <b>Cikal</b>
                    </span>
                    <img
                        src="https://avatar.iran.liara.run/public/28"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border border-gray-200"
                    />
                </div>
            </div>
        </header>
    );
}
