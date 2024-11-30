import { CART_ACTION_TYPES } from "./cart.type";

const INITIAL_STATE_CART = {
  active: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE_CART, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_IS_ACTIVE:
      return {
        ...state,
        active: payload,
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
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
