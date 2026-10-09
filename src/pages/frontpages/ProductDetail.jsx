
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();
    const p = location.state;

    const { addToCart } = useCart();

    const [notification, setNotification] = useState("");

    const handleAddToCart = () => {
        if (!p) return;

        addToCart(p);

        setNotification("Berhasil ditambahkan ke keranjang!");

        setTimeout(() => {
            setNotification("");
        }, 2500);
    };

    if (!p) {
        return (
            <div className="py-10 text-center">
                <h1 className="text-xl font-bold">
                    Produk tidak ditemukan
                </h1>

                <p className="mt-2 text-gray-500">
                    Silakan kembali ke halaman produk dan pilih produk lagi.
                </p>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-5xl">
            {/* Notifikasi */}
            {notification && (
                <div
                    role="status"
                    className="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-lg bg-green-600 px-5 py-4 text-white shadow-lg"
                >
                    <span className="text-xl font-bold">✓</span>

                    <span>{notification}</span>
                </div>
            )}

            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                {/* Foto Produk */}
                <div className="flex justify-center">
                    <img
                        src={p.img}
                        alt={p.name}
                        className="h-64 w-full max-w-xs rounded-xl object-cover"
                    />
                </div>

                {/* Informasi Produk */}
                <div>
                    <p className="text-sm text-gray-500">
                        {p.category_name}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold">
                        {p.name}
                    </h1>

                    <p className="mt-4 text-2xl font-bold text-[#8B5E3C]">
                        Rp {p.price.toLocaleString("id-ID")}
                    </p>

                    <p className="mt-3">
                        ⭐ {p.rating}
                    </p>

                    <p className="mt-2">
                        Stok: {p.stock}
                    </p>

                    {/* Tombol Tambah ke Keranjang */}
                    <button
                        onClick={handleAddToCart}
                        disabled={p.stock <= 0}
                        className="mt-6 w-full rounded-lg bg-[#8B5E3C] py-3 text-white transition hover:bg-[#70482f] disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        {p.stock <= 0
                            ? "Stok Habis"
                            : "Tambah ke Keranjang"}
                    </button>

                    {/* Deskripsi */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">
                            Deskripsi
                        </h2>

                        <p className="mt-2 leading-relaxed text-gray-600">
                            {p.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}