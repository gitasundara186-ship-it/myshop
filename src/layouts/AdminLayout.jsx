import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#FFF9F0]">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex-1 flex flex-col">

                <div className="md:hidden bg-[#8B5E3C] text-white p-4 flex justify-between items-center shadow">
                    <h1 className="font-bold">
                        Musics2Heart Admin
                    </h1>

                    <button
                        className="p-2 border border-white rounded"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                </div>

                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>

                <footer className="bg-[#8B5E3C] text-white p-4 text-center text-sm">
                    © 2026 Musics2Heart Music Store
                </footer>

            </div>
        </div>
    );
}