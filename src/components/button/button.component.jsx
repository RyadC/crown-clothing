import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, addItemInCart }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      onClick={addItemInCart}
    >
      {children}
    </button>
  );
};

export default Button;
