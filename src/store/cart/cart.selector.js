import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartActive = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.active
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (total, currentItem) => (total += currentItem.quantity),
      0
    );
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (total, currentItem) =>
        (total += currentItem.price * currentItem.quantity),
      0
    );
  }
);
