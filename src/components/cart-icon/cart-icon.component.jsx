import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  DIV_CartIconContainer,
  SHOPPINGICON_ShoppingIcon,
  SPAN_ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { active, setActive, cartCount } = useContext(CartContext);

  const openDropdownHandler = () => {
    setActive(!active);
  };

  return (
    <DIV_CartIconContainer onClick={openDropdownHandler}>
      <SHOPPINGICON_ShoppingIcon />
      <SPAN_ItemCount>{cartCount}</SPAN_ItemCount>
    </DIV_CartIconContainer>
  );
};

export default CartIcon;
