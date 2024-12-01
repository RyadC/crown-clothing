import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import {
  DIV_Arrow,
  DIV_CheckoutItemContainer,
  DIV_ImageContainer,
  DIV_RemoveButton,
  SPAN_Name,
  SPAN_Price,
  SPAN_Quantity,
  SPAN_Value,
} from "./checkout-item.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <DIV_CheckoutItemContainer>
      <DIV_ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </DIV_ImageContainer>
      <SPAN_Name> {name} </SPAN_Name>
      <SPAN_Quantity>
        <DIV_Arrow onClick={removeItemHandler}>&#10094;</DIV_Arrow>
        <SPAN_Value>{quantity}</SPAN_Value>
        <DIV_Arrow onClick={addItemHandler}>&#10095;</DIV_Arrow>
      </SPAN_Quantity>
      <SPAN_Price> {price}</SPAN_Price>
      <DIV_RemoveButton onClick={clearItemHandler}>&#10005;</DIV_RemoveButton>
    </DIV_CheckoutItemContainer>
  );
};

export default CheckoutItem;
