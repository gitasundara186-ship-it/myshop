import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem("orders");

        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    const addOrder = (order) => {
        const newOrder = {
            ...order,
            id: Date.now(),
            status: "Menunggu",
        };

        setOrders((prevOrders) => {
            const updatedOrders = [...prevOrders, newOrder];

            localStorage.setItem(
                "orders",
                JSON.stringify(updatedOrders)
            );

            return updatedOrders;
        });
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder() {
    return useContext(OrderContext);
}