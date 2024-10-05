import { useContext } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { cartItems, setCartItems } = useContext(CartContext);

  const addItemInCart = () => {
    const newCartItems = structuredClone(cartItems);

    // Find if product already exist
    const foundedIndex = newCartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    // If exist, add 1 on quantity
    if (foundedIndex !== -1) {
      newCartItems[foundedIndex].quantity++;
    } else {
      // If dont exist, add it on cartItems
      const newItem = { ...product, quantity: 1 };
      newCartItems.push(newItem);
    }

    setCartItems(newCartItems);
    console.log(cartItems);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" addItemInCart={addItemInCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
