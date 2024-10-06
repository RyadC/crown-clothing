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

const increaseQuantityOfItem = (cartItems, product) => {
  const newCartItems = structuredClone(cartItems);

  // Find product
  const foundedIndex = newCartItems.findIndex(
    (cartItem) => cartItem.id === product.id
  );

  newCartItems[foundedIndex].quantity++;

  return newCartItems;
};

const decreaseQuantityOfItem = (cartItems, product) => {
  const newCartItems = structuredClone(cartItems);

  // Find product
  const foundedIndex = newCartItems.findIndex(
    (cartItem) => cartItem.id === product.id
  );

  if (newCartItems[foundedIndex].quantity !== 0) {
    newCartItems[foundedIndex].quantity--;
  }

  return newCartItems;
};

const removeItem = (cartItems, product) => {
  const newCartItems = structuredClone(cartItems);

  // Find product
  const foundedIndex = newCartItems.findIndex(
    (cartItem) => cartItem.id === product.id
  );

  newCartItems.splice(foundedIndex, 1);

  return newCartItems;
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  active: false,
  setActive: () => null,
  cartCount: 0,
  setCartCount: () => null,
  increaseItemToCart: () => null,
  decreaseItemToCart: () => null,
  removeItemFromCart: () => null,
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

  const increaseItemToCart = (product) => {
    setCartItems(increaseQuantityOfItem(cartItems, product));
  };

  const decreaseItemToCart = (product) => {
    setCartItems(decreaseQuantityOfItem(cartItems, product));
  };

  const removeItemFromCart = (product) => {
    setCartItems(removeItem(cartItems, product));
  };

  const value = {
    active,
    setActive,
    cartItems,
    addItemToCart,
    cartCount,
    increaseItemToCart,
    decreaseItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
