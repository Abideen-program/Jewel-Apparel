import { useState, useContext } from "react";

import { UserContext } from "../../context/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utilities";

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import './sign-up.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setformFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext)

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

      setCurrentUser(user)

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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your eamil and password</span>
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

        <Button type="submit" >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;