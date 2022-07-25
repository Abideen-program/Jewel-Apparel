import { Outlet, Link } from "react-router-dom";

import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user.context";

import { signOutUSer } from "../../utilities/firebase/firebase.utilities";

import "./navigation.styles.scss";

const Navigator = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const signoutHandler = async () => {
    await signOutUSer();
    setCurrentUser(null);
  };

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
            <span className="nav-links" onClick={signoutHandler}>
              Sign out
            </span>
          ) : (
            <Link className="nav-links" to="auth">
              SING IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigator;
