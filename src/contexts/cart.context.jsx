import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  active: false,
  setActive: () => null,
});

export const CartProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const value = { active, setActive, cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
