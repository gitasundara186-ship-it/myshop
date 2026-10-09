import { useLocation, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();

    const location = useLocation();
    const p = location.state;

    const { addToCart } = useCart();

    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Foto Produk */}
                <div className="flex justify-center">
                    <img
                        src={p.img}
                        alt={p.name}
                        className="w-full max-w-xs h-64 object-cover rounded-xl"
                    />
                </div>

                {/* Informasi Produk */}
                <div>
                    <p className="text-sm text-gray-500">
                        {p.category_name}
                    </p>

                    <h1 className="text-3xl font-bold mt-2">
                        {p.name}
                    </h1>

                    <p className="text-2xl font-bold text-[#8B5E3C] mt-4">
                        Rp {p.price.toLocaleString("id-ID")}
                    </p>

                    <p className="mt-3">
                        ⭐ {p.rating}
                    </p>

                    <p className="mt-2">
                        Stok: {p.stock}
                    </p>

                    <button
                    onClick={() => addToCart(p)}
                    className="mt-6 w-full bg-[#8B5E3C] text-white py-3 rounded-lg hover:bg-[#70482f] transition"
                    >
                        Tambah ke Keranjang
                    </button>

                    {/* Deskripsi */}
                    <div className="mt-6">
                        <h2 className="font-semibold text-lg">
                            Deskripsi
                        </h2>

                        <p className="text-gray-600 mt-2 leading-relaxed">
                            {p.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}