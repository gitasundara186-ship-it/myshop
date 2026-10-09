export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">

            {/* Header Bar */}
            <div className="bg-[#8B5E3C] text-white rounded-xl px-6 py-5 shadow-sm">
                <h1 className="text-2xl font-bold">
                    Tentang Musics2Heart Music Store
                </h1>

                <p className="text-white/80 mt-1">
                    Informasi mengenai aplikasi dan toko
                </p>
            </div>

            {/* About Content */}
            <div className="bg-white rounded-xl shadow-sm border mt-6 p-6">
                <h2 className="text-xl font-semibold mb-3">
                    Musics2Heart Music Store
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    Musics2Heart Music Store adalah aplikasi e-commerce
                    sederhana yang menyediakan berbagai produk alat
                    musik dan aksesoris. Aplikasi ini dibuat untuk
                    memudahkan pengguna dalam mencari produk, melihat
                    detail produk, menambahkan produk ke keranjang,
                    dan melakukan checkout.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="bg-[#FFF9F0] rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Kategori
                        </p>

                        <p className="font-semibold mt-1">
                            Alat Musik
                        </p>
                    </div>

                    <div className="bg-[#FFF9F0] rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Platform
                        </p>

                        <p className="font-semibold mt-1">
                            Web Application
                        </p>
                    </div>

                    <div className="bg-[#FFF9F0] rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Versi
                        </p>

                        <p className="font-semibold mt-1">
                            Version 1.0
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}