import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log(`${password} and ${confirmPassword} is not same`);
      return;
    }

    if (password.length < 6) {
      console.log("Password should be at least 6 characters");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(formFields);
      const userDocRefInst = createUserDocumentFromAuth(user, {
        displayName,
      });

      setFormFields(...defaultFormFields);
    } catch (error) {
      console.error("saving user failed:", error.code, error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          inputOptions={{
            onChange: handleChange,
            type: "text",
            name: "displayName",
            id: "displayName",
            value: displayName,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            onChange: handleChange,
            type: "email",
            name: "email",
            id: "email",
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            onChange: handleChange,
            type: "password",
            name: "password",
            id: "password",
            value: password,
            required: true,
          }}
        />

        <FormInput
          label="Confirm password"
          inputOptions={{
            onChange: handleChange,
            type: "confirmPassword",
            name: "confirmPassword",
            id: "confirmPassword",
            value: confirmPassword,
            required: true,
          }}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
