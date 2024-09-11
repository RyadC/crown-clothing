import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

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

    const { user } = await signInAuthUserWithEmailAndPassword(email, password);
    const userDocRefInst = createUserDocumentFromAuth(user);

    console.log(userDocRefInst);
  };

  return (
    <div>
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
        <Button>Sign In</Button>
      </form>
      <Button onClick={signInWithGoogle} buttonType="google">
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignInForm;
