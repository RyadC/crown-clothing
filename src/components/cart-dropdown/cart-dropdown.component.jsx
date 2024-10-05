import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <span>{item.quantity}</span> <span>x</span>{" "}
              <span>{item.price}€</span>
            </div>
          );
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
