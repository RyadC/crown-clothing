import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils.js";

import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect(() => {
    const getGoogleRedirectResult = async () => {
      const result = await getRedirectResult(auth);
      console.log(result);
    };
    getGoogleRedirectResult();

    // const result = await getRedirectResult(auth);
    // console.log(result);
  }, []);

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
    </div>
  );
};

export default SignIn;
