import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  DIV_NavigationContainer,
  DIV_NavLinksContainer,
  LINK_LogoContainer,
  LINK_NavLink,
} from "./navigation.styles";

// import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { active } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <DIV_NavigationContainer>
        <LINK_LogoContainer to={"/"}>
          <CrwnLogo className="logo" />
        </LINK_LogoContainer>
        <DIV_NavLinksContainer>
          <LINK_NavLink to={"/shop"}>Shop</LINK_NavLink>

          {currentUser ? (
            <LINK_NavLink as={"span"} onClick={signOutHandler}>
              {" "}
              Sign Out
            </LINK_NavLink>
          ) : (
            <LINK_NavLink className="nav-link" to={"/auth"}>
              Sign In
            </LINK_NavLink>
          )}

          <CartIcon />

          {active && <CartDropdown />}
        </DIV_NavLinksContainer>
      </DIV_NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
