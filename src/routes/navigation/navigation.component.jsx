import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import "./navigation.styles.scss";
import { useContext } from "react";

const Navigator = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)
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

          <Link className="nav-links" to="auth">
            SING IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigator;
