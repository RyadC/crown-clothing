import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  setProducts: () => null,
  active: false,
  setActive: () => null,
});

export const CartProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const value = { active, setActive };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
