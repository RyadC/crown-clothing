import { createContext, useEffect, useState } from "react";

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
  cartCount: 0,
  setCartCount: () => null,
});

export const CartProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const itemsQuantity = cartItems.reduce(
      (total, currentItem) => (total += currentItem.quantity),
      0
    );
    setCartCount(itemsQuantity);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItemInCartArray(cartItems, productToAdd));
  };

  const value = { active, setActive, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
