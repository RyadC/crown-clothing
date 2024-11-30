import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  DIV_CartIconContainer,
  SHOPPINGICON_ShoppingIcon,
  SPAN_ItemCount,
} from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartActive,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setCartActiveAction } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const active = useSelector(selectCartActive);
  const cartCount = useSelector(selectCartCount);

  console.log(active);

  const openDropdownHandler = () => {
    dispatch(setCartActiveAction(!active));
  };

  return (
    <DIV_CartIconContainer onClick={openDropdownHandler}>
      <SHOPPINGICON_ShoppingIcon />
      <SPAN_ItemCount>{cartCount}</SPAN_ItemCount>
    </DIV_CartIconContainer>
  );
};

export default CartIcon;
