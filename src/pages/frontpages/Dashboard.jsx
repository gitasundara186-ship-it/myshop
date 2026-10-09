import { useState } from "react";
import ProductCard from "../../components/ProductCard";

import yamahapsre373 from "../../assets/yamahapsre373.jpg";
import yamahaf310 from "../../assets/yamahaf310.jpg";
import yamahac315 from "../../assets/yamahac315.jpg";
import rolandtd1dmk from "../../assets/rolandtd1dmk.jpg";
import pickgitarakustik from "../../assets/pickgitarakustik.jpg";
import fendersquier from "../../assets/fendersquier.jpg";
import ernieballguitarstrings from "../../assets/ernieballguitarstrings.jpg";
import casiocts300 from "../../assets/casiocts300.jpg";
import cajonwpc100MH from "../../assets/cajonwpc100MH.jpg";
import microphoneAT2020 from "../../assets/audiotechnicaat2020.jpg";
import ibanezukc10 from "../../assets/ibanezukc10.jpg";
import sopranomandalika from "../../assets/sopranomandalika.jpg";

const products = [
    {
        id: 1,
        name: "Gitar Yamaha F310",
        price: 1500000,
        stock: 10,
        category_name: "Alat Musik",
        rating: 4.8,
        img: yamahaf310,
        description:
            "Gitar akustik Yamaha yang cocok untuk pemula maupun pemain yang sudah berpengalaman.",
    },
    {
        id: 2,
        name: "Gitar Fender Squier Stratocaster",
        price: 4900000,
        stock: 7,
        category_name: "Alat Musik",
        rating: 4.9,
        img: fendersquier,
        description:
            "Gitar elektrik dengan desain klasik yang cocok untuk berbagai genre musik.",
    },
    {
        id: 3,
        name: "Gitar Yamaha C315",
        price: 1300000,
        stock: 4,
        category_name: "Alat Musik",
        rating: 4.9,
        img: yamahac315,
        description:
            "Gitar classic dengan desain yang simple cocok untuk pemula.",
    },
    {
        id: 4,
        name: "Keyboard Yamaha PSR-E373",
        price: 4000000,
        stock: 8,
        category_name: "Alat Musik",
        rating: 4.7,
        img: yamahapsre373,
        description:
            "Keyboard portable dengan berbagai pilihan suara dan fitur untuk belajar musik.",
    },
    {
        id: 5,
        name: "Keyboard Casio CT-S300",
        price: 2500000,
        stock: 6,
        category_name: "Alat Musik",
        rating: 4.6,
        img: casiocts300,
        description:
            "Keyboard ringan dan praktis untuk latihan maupun kebutuhan pertunjukan.",
    },
    {
        id: 6,
        name: "Drum Roland TD-1DMK",
        price: 8500000,
        stock: 4,
        category_name: "Alat Musik",
        rating: 4.9,
        img: rolandtd1dmk,
        description:
            "Electronic drum kit yang cocok untuk latihan bermain drum di rumah.",
    },
    {
        id: 7,
        name: "Cajon WCP100MH",
        price: 2400000,
        stock: 3,
        category_name: "Alat Musik",
        rating: 4.9,
        img: cajonwpc100MH,
        description:
            "Alat digital berbentuk simpel yang punya sound module internal.",
    },
    {
        id: 8,
        name: "Microphone Audio-Technica AT2020",
        price: 1500000,
        stock: 5,
        category_name: "Microphone",
        rating: 4.8,
        img: microphoneAT2020,
        description:
            "Condenser microphone untuk recording vokal, podcast, dan kebutuhan studio.",
    },
    {
        id: 9,
        name: "Senar Ernie Ball Guitar Strings",
        price: 60000,
        stock: 20,
        category_name: "Aksesoris",
        rating: 4.7,
        img: ernieballguitarstrings,
        description:
            "Senar gitar berkualitas untuk menjaga suara gitar tetap jernih dan nyaman dimainkan.",
    },
    {
        id: 10,
        name: "Pick Gitar Akustik",
        price: 5000,
        stock: 20,
        category_name: "Aksesoris",
        rating: 4.5,
        img: pickgitarakustik,
        description:
            "Pick gitar premium anti-slip dari bahan berkualitas yang bikin petikan senar lebih presisi.",
    },
    {
        id: 11,
        name: "Ukulele Ibanez UKC10",
        price: 1329000,
        stock: 4,
        category_name: "Alat Musik",
        rating: 4.6,
        img: ibanezukc10,
        description:
            "Ukulele dengan suara yang enak didengar dari bahan yang berkualitas dan mudah dibawa kemana-mana.",
    },
    {
        id: 12,
        name: "Ukulele Soprano Mandalika",
        price: 400000,
        stock: 7,
        category_name: "Alat Musik",
        rating: 4.5,
        img: sopranomandalika,
        description:
            "Ukulele dengan harga yang terjangkau tetapi kualitas bagus, cocok untuk anak sekolahan.",
    },
];

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredProducts = products.filter((item) => {
        const matchSearch = item.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === "All" ||
            item.category_name === category;

        return matchSearch && matchCategory;
    });

    console.log("CATEGORY:", category);
    console.log("FILTERED PRODUCTS:", filteredProducts);

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                    Musics2Heart Music Store
                </h1>

                {/* Category Filter */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded-lg px-4 py-2 bg-white"
                >
                    <option value="All">Semua Kategori</option>
                    <option value="Alat Musik">Alat Musik</option>
                    <option value="Microphone">Microphone</option>
                    <option value="Aksesoris">Aksesoris</option>
                </select>
            </div>

            {/* Search */}
            <input
                type="text"
                placeholder="Cari produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 mb-6"
            />

            {/* Product List */}
            {filteredProducts.length === 0 ? (
                <p className="text-gray-500">
                    Produk tidak ditemukan.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((item) => (
                        <ProductCard
                            key={item.id}
                            p={item}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}