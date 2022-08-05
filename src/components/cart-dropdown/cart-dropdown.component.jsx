import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import CartItem from "../cart-item/cart-item.component";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()
  const goToCheckOutPage = () => {
    return navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>

      <Button onClick={goToCheckOutPage}>go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
