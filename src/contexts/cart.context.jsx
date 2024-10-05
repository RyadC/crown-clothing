import { createContext, useState } from "react";

const addItemInCartArray = (cartItems, productToAdd) => {
  const newCartItems = structuredClone(cartItems);

  // Find if product already exist
  const foundedIndex = newCartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If exist, add 1 on quantity
  if (foundedIndex !== -1) {
    newCartItems[foundedIndex].quantity++;
  } else {
    // If dont exist, add it on cartItems
    const newItem = { ...productToAdd, quantity: 1 };
    newCartItems.push(newItem);
  }

  return newCartItems;
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  active: false,
  setActive: () => null,
});

export const CartProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItemInCartArray(cartItems, productToAdd));
  };

  const value = { active, setActive, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
