import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-1 p-6">
                <Outlet
                    context={{
                        search,
                        category,
                    }}
                />
            </main>

            <footer className="bg-white-800 text-black text-center p-4">
                <p>© 2026 Musics2Heart Music Store | Version 1.0</p>
            </footer>
        </div>
    );
}