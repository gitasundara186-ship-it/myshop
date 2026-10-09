import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { totalQty } = useCart();

    return (
        <nav className="bg-[#8B5E3C] text-white px-6 py-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-xl">
                Musics2Heart
            </Link>

            <div className="flex gap-6">
                <Link to="/" className="hover:text-gray-200">
                    Dashboard
                </Link>

                <Link to="/cart" className="hover:text-gray-200">
                    Keranjang ({totalQty})
                </Link>

                <Link to="/checkout" className="hover:text-gray-200">
                    Checkout
                </Link>
            </div>
        </nav>
    );
}