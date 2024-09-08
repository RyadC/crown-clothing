import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils.js";
import Signup from "../../components/sign-up/sign-up.component.jsx";

const SignIn = () => {
  const userSigninPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefInst = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={userSigninPopup}>Sign In with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>

      <Signup />
    </div>
  );
};

export default SignIn;
