import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { active, setActive, cartCount } = useContext(CartContext);

  const openDropdownHandler = () => {
    setActive(!active);
  };

  return (
    <div className="cart-icon-container" onClick={openDropdownHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
