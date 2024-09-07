import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const userSigninPopup = async () => {
    const result = await signInWithGooglePopup();
    console.log(result);
  };

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={userSigninPopup}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
