import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/cart/cart.action";

import "./product-card.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // const { addItemToCart } = useContext(CartContext);

  const addProductInCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductInCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
