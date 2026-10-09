import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContext";

export default function Checkout() {
    const {
        cart,
        checkout,
    } = useCart();

    const { addOrder } = useOrder();

    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        note: "",
        payment: "",
    });

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckout = () => {
        console.log("TOMBOL CHECKOUT DIKLIK");

        if (
            !form.name ||
            !form.phone ||
            !form.address ||
            !form.payment
        ) {
            console.log("DATA BELUM LENGKAP");
            return;
        }

        console.log("DATA PESANAN:", {
            customer: form.name,
            phone: form.phone,
            address: form.address,
            note: form.note,
            payment: form.payment,
            items: cart,
            total: totalPrice,
        });

        addOrder({
            customer: form.name,
            phone: form.phone,
            address: form.address,
            note: form.note,
            payment: form.payment,
            items: cart,
            total: totalPrice,
        });

        console.log("PESANAN SUDAH MASUK ORDER CONTEXT");

        checkout();

        setSuccess(true);
    };

    if (success) {
        return (
            <div>
                <h1 className="text-2xl font-bold">
                    Checkout
                </h1>

                <div className="mt-6 border rounded-lg p-6">
                    <h2 className="text-xl font-semibold">
                        Pesanan Berhasil!
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Terima kasih sudah berbelanja di Musics2Heart.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">
                Checkout
            </h1>

            <p className="mt-2">
                Periksa kembali pesanan dan isi data pengiriman kamu.
            </p>

            {cart.length === 0 ? (
                <p className="mt-6 text-gray-500">
                    Belum ada produk untuk checkout.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

                    {/* Data Pengiriman */}
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-5">
                            Data Pengiriman
                        </h2>

                        <div className="space-y-4">

                            {/* Nama */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Nama Lengkap
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama lengkap"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                            </div>

                            {/* Nomor Telepon */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Nomor Telepon
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Contoh: 081234567890"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Alamat Pengiriman
                                </label>

                                <textarea
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Masukkan alamat lengkap"
                                    rows="4"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                            </div>

                            {/* Catatan */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Catatan Pesanan
                                </label>

                                <textarea
                                    name="note"
                                    value={form.note}
                                    onChange={handleChange}
                                    placeholder="Contoh: Tolong taruh di depan rumah"
                                    rows="3"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                            </div>

                            {/* Metode Pembayaran */}
                            <div>
                                <label className="block mb-2 font-medium">
                                    Metode Pembayaran
                                </label>

                                <select
                                    name="payment"
                                    value={form.payment}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 bg-white"
                                >
                                    <option value="">
                                        Pilih metode pembayaran
                                    </option>

                                    <option value="Transfer Bank">
                                        Transfer Bank
                                    </option>

                                    <option value="E-Wallet">
                                        E-Wallet
                                    </option>

                                    <option value="COD">
                                        COD (Bayar di Tempat)
                                    </option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* Ringkasan Pesanan */}
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-5">
                            Ringkasan Pesanan
                        </h2>

                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b pb-4"
                                >
                                    <div>
                                        <h3 className="font-semibold">
                                            {item.name}
                                        </h3>

                                        <p className="text-gray-600">
                                            {item.qty} × Rp{" "}
                                            {item.price.toLocaleString("id-ID")}
                                        </p>
                                    </div>

                                    <p className="font-semibold">
                                        Rp{" "}
                                        {(item.price * item.qty).toLocaleString(
                                            "id-ID"
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 border-t pt-4">

                            <div className="flex justify-between">
                                <p className="text-xl font-bold">
                                    Total
                                </p>

                                <p className="text-xl font-bold">
                                    Rp {totalPrice.toLocaleString("id-ID")}
                                </p>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={
                                    !form.name ||
                                    !form.phone ||
                                    !form.address ||
                                    !form.payment
                                }
                                className="mt-5 w-full bg-[#8B5E3C] text-white py-3 rounded-lg hover:bg-[#70482F] disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                Konfirmasi Pesanan
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}