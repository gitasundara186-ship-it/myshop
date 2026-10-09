import { useState } from "react";

export default function ProductPage() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const [products, setProducts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!productName || !price || !category) {
            alert("Semua data harus diisi!");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: price,
            category: category,
        };

        setProducts([...products, newProduct]);

        setProductName("");
        setPrice("");
        setCategory("");
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    Produk
                </h1>

                <p className="text-gray-600 mt-1">
                    Tambahkan produk baru ke Musics2Heart Music Store.
                </p>
            </div>

            {/* Form Tambah Produk */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-xl font-bold mb-4">
                    Tambah Produk
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nama Produk */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Nama Produk
                        </label>

                        <input
                            type="text"
                            value={productName}
                            onChange={(e) =>
                                setProductName(e.target.value)
                            }
                            placeholder="Masukkan nama produk"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* Harga */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Harga
                        </label>

                        <input
                            type="text"
                            inputMode="numeric"
                            value={price}
                            onChange={(e) =>
                                setPrice(
                                    e.target.value.replace(/\D/g, "")
                                )
                            }
                            placeholder="Masukkan harga"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* Kategori */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Kategori
                        </label>

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="w-full border rounded-lg px-4 py-2"
                        >
                            <option value="">
                                Pilih kategori
                            </option>

                            <option value="Alat Musik">
                                Alat Musik
                            </option>

                            <option value="Microphone">
                                Microphone
                            </option>

                            <option value="Aksesoris">
                                Aksesoris
                            </option>
                        </select>
                    </div>

                    {/* Tombol */}
                    <button
                        type="submit"
                        className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80"
                    >
                        Tambah Produk
                    </button>
                </form>

                {/* Produk yang ditambahkan */}
                {products.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">
                            Produk yang Ditambahkan
                        </h2>

                        <div className="space-y-3">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="border rounded-lg p-4"
                                >
                                    <h3 className="font-semibold">
                                        {product.name}
                                    </h3>

                                    <p className="text-gray-600">
                                        Rp{" "}
                                        {Number(
                                            product.price
                                        ).toLocaleString("id-ID")}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {product.category}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}