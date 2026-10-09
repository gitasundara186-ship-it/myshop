
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ p, onAdded }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(p);

        if (onAdded) {
            onAdded();
        }
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg">
            {/* Product Image */}
            <img
                src={p.img}
                alt={p.name}
                className="h-48 w-full object-cover"
            />

            <div className="p-4">
                {/* Category */}
                <p className="text-sm text-gray-500">
                    {p.category_name}
                </p>

                {/* Product Name */}
                <h2 className="mt-1 text-lg font-semibold">
                    {p.name}
                </h2>

                {/* Rating */}
                <p className="mt-2 text-sm text-gray-600">
                    ⭐ {p.rating}
                </p>

                {/* Price */}
                <p className="mt-2 text-xl font-bold text-[#8B5E3C]">
                    Rp {p.price.toLocaleString("id-ID")}
                </p>

                {/* Stock */}
                <p className="mt-1 text-sm text-gray-500">
                    Stok: {p.stock}
                </p>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    disabled={p.stock <= 0}
                    className="mt-3 w-full rounded-lg border border-[#8B5E3C] py-2 text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {p.stock <= 0
                        ? "Stok Habis"
                        : "+ Tambah ke Keranjang"}
                </button>

                {/* Detail Button */}
                <Link
                    to={`/product/${p.slug ?? p.id}`}
                    state={p}
                    className="mt-4 block rounded-lg bg-[#8B5E3C] py-2 text-center text-white hover:bg-[#70482F]"
                >
                    Lihat Detail
                </Link>
            </div>
        </div>
    );
}