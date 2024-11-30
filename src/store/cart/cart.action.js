import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.type";

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

export const setCartActiveAction = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_IS_ACTIVE, boolean);

export const setCartItemsAction = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd) =>
  setCartItemsAction(addItemInCartArray(cartItems, productToAdd));

export const removeItemFromCart = (cartItems, productToRemove) =>
  setCartItemsAction(removeItemFromCartArray(cartItems, productToRemove));

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  setCartItemsAction(clearCartItem(cartItems, cartItemToClear));
