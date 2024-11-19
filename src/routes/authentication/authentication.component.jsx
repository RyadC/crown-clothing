import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import { DIV_AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <DIV_AuthenticationContainer>
      {/* <h1>SignIn page</h1> */}
      <SignInForm />
      <SignUpForm />
    </DIV_AuthenticationContainer>
  );
};

export default Authentication;
