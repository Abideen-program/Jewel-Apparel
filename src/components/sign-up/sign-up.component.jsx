import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setformFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields)
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign up with your eamil and password</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <label>Confirm password</label>
        <input
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
