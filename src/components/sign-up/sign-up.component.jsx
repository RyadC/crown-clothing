import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signup = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      console.log(`${password} and ${confirmPassword} is not same`);
      return;
    }

    if (password.length < 6) {
      console.log("Password should be at least 6 characters");
      return;
    }

    setFormFields({
      displayName: formData.get("displayName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    try {
      const { user } = await createAuthUserWithEmailAndPassword(formFields);
      const userDocRefInst = createUserDocumentFromAuth(user, {
        displayName: formFields.displayName,
      });
    } catch (error) {
      console.error("saving user failed:", error.code, error.message);
    }

    // console.dir(e.target);
  };

  return (
    <div>
      <h2>Sign up with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Name</label>
        <input type="text" name="displayName" id="displayName" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />

        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
