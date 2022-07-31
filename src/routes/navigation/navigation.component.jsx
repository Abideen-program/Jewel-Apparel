import { Outlet, Link } from "react-router-dom";

import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";

import { signOutUSer } from "../../utilities/firebase/firebase.utilities";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../context/cart.context";

import "./navigation.styles.scss";

const Navigator = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navBar">
        
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-links" to="shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-links" onClick={signOutUSer}>
              Sign out
            </span>
          ) : (
            <Link className="nav-links" to="auth">
              SING IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigator;
