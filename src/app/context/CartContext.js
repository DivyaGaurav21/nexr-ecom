"use client";

import { createContext, useState, useEffect } from "react";

// Create a context for managing the shopping cart state
const CartContext = createContext();

// CartProvider component manages the state and provides it to the app
export const CartProvider = ({ children }) => {
    // State to store the shopping cart items
    const [cart, setCart] = useState([]);

    // Effect to initialize the cart state from local storage
    useEffect(() => {
        setCartToState();
    }, []);

    // Function to set the cart state from local storage
    const setCartToState = () => {
        setCart(
            localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []
        );
    };

    // Function to add an item to the shopping cart
    const addItemToCart = async ({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity = 1,
    }) => {
        const item = {
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity,
        };

        // Check if the item already exists in the cart
        const isItemExist = cart?.cartItems?.find(
            (i) => i.product === item.product
        );

        let newCartItems;
        // If the item exists, update its quantity, otherwise add it to the cart
        if (isItemExist) {
            newCartItems = cart?.cartItems?.map((i) =>
                i.product === isItemExist.product ? item : i
            );
        } else {
            newCartItems = [...(cart?.cartItems || []), item];
        }
        // Update local storage and set the state
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };
    // Function to delete an item from the shopping cart
    const deleteItemFromCart = (id) => {
        // Filter out the item with the given product id
        const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);
        // Update local storage and set the state
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };
    // Provide the cart state and functions to the app through context
    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                deleteItemFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Export the CartContext for components to consume
export default CartContext;