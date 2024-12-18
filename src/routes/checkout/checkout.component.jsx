import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";

import {
  DIV_CheckoutContainer,
  DIV_CheckoutHeader,
  DIV_HeaderBlock,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <DIV_CheckoutContainer>
      <DIV_CheckoutHeader>
        <DIV_HeaderBlock>
          <span>Article</span>
        </DIV_HeaderBlock>
        <DIV_HeaderBlock>
          <span>Description</span>
        </DIV_HeaderBlock>
        <DIV_HeaderBlock>
          <span>Quantité</span>
        </DIV_HeaderBlock>
        <DIV_HeaderBlock>
          <span>Prix</span>
        </DIV_HeaderBlock>
        <DIV_HeaderBlock>
          <span>Supprimer</span>
        </DIV_HeaderBlock>
      </DIV_CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: {cartTotal}€</div>
    </DIV_CheckoutContainer>
  );
};

export default Checkout;
