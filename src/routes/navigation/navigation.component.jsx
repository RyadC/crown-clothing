import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.styles.scss";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { active } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"} className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign In
            </Link>
          )}

          <CartIcon />

          {active && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
