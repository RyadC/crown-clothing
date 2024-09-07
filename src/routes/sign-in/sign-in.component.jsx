import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const userSigninPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefInst = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={userSigninPopup}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
