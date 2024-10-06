import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.title === newItem.title
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevItems, newItem];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
