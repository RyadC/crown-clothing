import "./cart-item.styles.jsx";
import {
  DIV_CartItemContainer,
  DIV_ItemDetails,
  SPAN_ItemName,
  SPAN_ItemPrice,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <DIV_CartItemContainer>
      <img src={imageUrl} alt={name} />
      <DIV_ItemDetails>
        <SPAN_ItemName>{name}</SPAN_ItemName>
        <SPAN_ItemPrice>
          {quantity} x {price}€
        </SPAN_ItemPrice>
      </DIV_ItemDetails>
    </DIV_CartItemContainer>
  );
};

export default CartItem;
