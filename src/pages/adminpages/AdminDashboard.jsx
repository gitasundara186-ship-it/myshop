import { useOrder } from "../../context/OrderContext";

export default function AdminDashboard() {
    const { orders } = useOrder();

    console.log("ORDERS DI ADMIN:", orders);

    const totalPenjualan = orders.reduce(
        (total, order) => total + order.total,
        0
    );

    const stats = [
        {
            title: "Total Produk",
            value: "10",
            icon: "🎸",
        },
        {
            title: "Total Pesanan",
            value: orders.length,
            icon: "📦",
        },
        {
            title: "Total Penjualan",
            value: `Rp ${totalPenjualan.toLocaleString("id-ID")}`,
            icon: "💰",
        },
        {
            title: "Produk Terjual",
            value: orders.reduce(
                (total, order) =>
                    total +
                    order.items.reduce(
                        (itemTotal, item) => itemTotal + item.qty,
                        0
                    ),
                0
            ),
            icon: "🛒",
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    Dashboard Admin
                </h1>

                <p className="text-gray-600 mt-1">
                    Selamat datang di dashboard Musics2Heart Music Store.
                </p>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="bg-white rounded-xl shadow-sm p-5 border"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    {stat.title}
                                </p>

                                <h2 className="text-xl font-bold mt-2">
                                    {stat.value}
                                </h2>
                            </div>

                            <div className="text-3xl">
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Daftar Pesanan */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">
                    Pesanan Terbaru
                </h2>

                {orders.length === 0 ? (
                    <div className="bg-white border rounded-xl p-6">
                        <p className="text-gray-500">
                            Belum ada pesanan masuk.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white border rounded-xl p-5"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold">
                                            {order.customer}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {order.phone}
                                        </p>
                                    </div>

                                    <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                        {order.status}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    {order.items.map((item) => (
                                        <p
                                            key={item.id}
                                            className="text-sm text-gray-600"
                                        >
                                            {item.name} × {item.qty}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-4 border-t pt-3">
                                    <p className="text-sm text-gray-500">
                                        Alamat: {order.address}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Pembayaran: {order.payment}
                                    </p>

                                    <p className="font-bold mt-2">
                                        Total: Rp{" "}
                                        {order.total.toLocaleString("id-ID")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}