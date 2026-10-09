import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      
      {/* Product Image */}
      <img
        src={p.img}
        alt={p.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-gray-500">{p.category_name}</p>

        {/* Product Name */}
        <h2 className="font-semibold text-lg mt-1">
          {p.name}
        </h2>

        {/* Rating */}
        <p className="text-sm text-gray-600 mt-2">
          ⭐ {p.rating}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-[#8B5E3C] mt-2">
          Rp {p.price.toLocaleString("id-ID")}
        </p>

        {/* Stock */}
        <p className="text-sm text-gray-500 mt-1">
          Stok: {p.stock}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(p)}
          className="mt-3 w-full border border-[#8B5E3C] text-[#8B5E3C] py-2 rounded-lg hover:bg-[#8B5E3C] hover:text-white"
        >
          + Tambah ke Keranjang
        </button>

        {/* Detail Button */}
        <Link
          to={`/product/${p.slug}`}
          state={p}
          className="block text-center mt-4 bg-[#8B5E3C] text-white py-2 rounded-lg hover:bg-[#70482F]"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}