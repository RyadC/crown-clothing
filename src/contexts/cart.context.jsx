import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const removeItemFromCartArray = (cartItems, productToRemove) => {
  const newCartItems = structuredClone(cartItems);

  // Find if product already exist
  const foundedIndex = newCartItems.findIndex(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // If exist, remove 1 from quantity
  if (foundedIndex !== -1) {
    newCartItems[foundedIndex].quantity === 1
      ? newCartItems.splice(foundedIndex, 1)
      : newCartItems[foundedIndex].quantity--;
  }

  return newCartItems;
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  active: false,
  setActive: () => null,
  cartCount: 0,
  setCartCount: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_IS_ACTIVE: "SET_CART_IS_OPEN",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_IS_ACTIVE:
      return {
        ...state,
        active: !state.active,
      };

    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };

    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      const { cartItems, cartCount, cartTotal } = payload;
      return {
        ...state,
        cartItems,
        cartCount,
        cartTotal,
      };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};

const INITIAL_STATE = {
  active: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { active, cartCount, cartTotal, cartItems } = state;

  const setActive = () => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_IS_ACTIVE));
  };

  const setCartItems = (newCartItems) => {
    const newItemsQuantity = newCartItems.reduce(
      (total, currentItem) => (total += currentItem.quantity),
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, currentItem) =>
        (total += currentItem.price * currentItem.quantity),
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newItemsQuantity,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addItemInCartArray(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItemFromCartArray(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    active,
    setActive,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
