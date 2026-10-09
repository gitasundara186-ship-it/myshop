import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
    const {
        cart,
        updateQty,
        removeFromCart,
    } = useCart();

    return (
        <div>
            <h1 className="text-2xl font-bold">Cart</h1>
            <p className="mt-2">Halaman keranjang belanja.</p>

            {cart.length === 0 ? (
                <p className="mt-6 text-gray-500">
                    Keranjang masih kosong.
                </p>
            ) : (
                <div>
                    <div className="mt-6 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-lg p-4 flex items-center gap-4"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded"
                                />

                                <div className="flex-1">
                                    <h2 className="font-semibold">
                                        {item.name}
                                    </h2>

                                    <p className="text-[#8B5E3C] font-bold mt-1">
                                        Rp {item.price.toLocaleString("id-ID")}
                                    </p>

                                    <div className="flex items-center gap-2 mt-3">
                                        <button
                                            onClick={() =>
                                                updateQty(item.id, item.qty - 1)
                                            }
                                            className="border px-3 py-1 rounded"
                                        >
                                            -
                                        </button>

                                        <span>{item.qty}</span>

                                        <button
                                            onClick={() =>
                                                updateQty(item.id, item.qty + 1)
                                            }
                                            className="border px-3 py-1 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500"
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Checkout */}
                    <div className="mt-6 flex justify-end">
                        <Link
                            to="/checkout"
                            className="bg-[#8B5E3C] text-white px-6 py-3 rounded-lg hover:bg-[#70482F]"
                        >
                            Lanjut ke Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}