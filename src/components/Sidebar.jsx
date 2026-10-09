import { NavLink } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const menu = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: "🏠",
        },
        {
            name: "Produk",
            path: "/admin/products",
            icon: "📦",
        },
        {
            name: "About",
            path: "/admin/about",
            icon: "ℹ️",
        },
    ];

    return (
        <aside
            className={`
                fixed md:static
                top-0 left-0
                h-screen
                w-64
                bg-[#8B5E3C]
                text-white
                z-50
                transform transition-transform duration-300
                ${
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                }
            `}
        >
            <div className="p-6 border-b border-white/20">
                <h1 className="text-xl font-bold">
                    🎵 Musics2Heart
                </h1>

                <p className="text-sm text-white/70 mt-1">
                    Admin Panel
                </p>
            </div>

            <nav className="p-4 space-y-2">
                {menu.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === "/admin"}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                                isActive
                                    ? "bg-white text-[#8B5E3C] font-semibold"
                                    : "hover:bg-white/10"
                            }`
                        }
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}