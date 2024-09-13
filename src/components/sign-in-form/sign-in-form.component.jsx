import { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component.jsx";
import "./sign-in.styles.scss";
import { UserContext } from "../../contexts/user.context.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { setCurrentUser } = useContext(UserContext);

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefInst = createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);
      setFormFields({ ...defaultFormFields });

      const userDocRefInst = await createUserDocumentFromAuth(user);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password and for email");
          break;

        case "auth/user-not-found":
          alert(",o user associated with this email");
          break;

        default:
          console.error(err);
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOptions={{
            onChange: handleChange,
            type: "email",
            name: "email",
            id: "signin-email",
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="password"
          inputOptions={{
            onChange: handleChange,
            type: "password",
            name: "password",
            id: "signin-password",
            value: password,
            required: true,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
