import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCheckout, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, quantity, price } = cartItem;

  const increaseQuantity = () => addItemToCart(cartItem);
  const reduceQuantity = () => removeItemFromCart(cartItem);
  const clearCheckout = () => removeItemFromCheckout(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={reduceQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCheckout}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
