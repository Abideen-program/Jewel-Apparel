import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utilities";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setformFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setformFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2>Sign up with your eamil and password</h2>
      <form onSubmit={handleSubmit}>

        <FormInput
        label='Display Name'
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />

        <FormInput
            label='Email'
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
        label='Password'
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <FormInput
        label='Confirm Password'
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
