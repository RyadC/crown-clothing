import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import {
  DIV_CartDropdownContainer,
  DIV_CartItems,
  SPAN_EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <DIV_CartDropdownContainer>
      <DIV_CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <SPAN_EmptyMessage>Your cart is empty</SPAN_EmptyMessage>
        )}
      </DIV_CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </DIV_CartDropdownContainer>
  );
};

export default CartDropdown;
