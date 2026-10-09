import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            return [...prev, { ...product, qty: 1 }];
        });
    };

    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: Math.max(1, qty) }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // Checkout
    const checkout = () => {
        if (cart.length === 0) return;

        const totalPrice = cart.reduce(
            (total, item) => total + item.price * item.qty,
            0
        );

        const newOrder = {
            id: Date.now(),
            date: new Date().toLocaleString("id-ID"),
            items: cart,
            total: totalPrice,
        };

        setOrders((prev) => [...prev, newOrder]);

        setCart([]);
    };

    const totalQty = cart.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                orders,
                addToCart,
                updateQty,
                removeFromCart,
                checkout,
                totalQty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);