import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/adminpages/AdminDashboard";
import ProductPage from "./pages/adminpages/ProductPage";
import AboutPage from "./pages/adminpages/AboutPage";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";

export default function App() {
    return (
        <Routes>
            {/* Frontpage */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>

            {/* Admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="products" element={<ProductPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    );
}