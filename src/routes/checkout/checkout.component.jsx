import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const {
    cartItems,
    increaseItemToCart,
    decreaseItemToCart,
    removeItemFromCart,
  } = useContext(CartContext);

  return (
    <div className="items-list-container">
      {cartItems.map((item) => (
        <div key={item.id} className="item-container">
          <img src={item.imageUrl} alt={item.name} />
          <span>{item.name}</span>
          <div className="quantity-container">
            <span className="addOne" onClick={() => decreaseItemToCart(item)}>
              {"<"}
            </span>
            <span className="quantity">{item.quantity}</span>
            <span
              className="removeOne"
              onClick={() => increaseItemToCart(item)}
            >
              {">"}
            </span>
          </div>
          <span>{item.price}</span>
          <span
            className="remove-icon"
            onClick={() => removeItemFromCart(item)}
          >
            X
          </span>
        </div>
      ))}
      <div>
        {cartItems.reduce((total, item) => {
          return (total += item.quantity * item.price);
        }, 0)}
      </div>
    </div>
  );
};

export default Checkout;
