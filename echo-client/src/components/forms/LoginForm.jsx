import { useState } from "react";
import { loginUser } from "../../api/user";
import useLoginUser from "../../hooks/useLoginUser";

import TypedInput from "./TypedInput";

const LoginForm = () => {
  const login = useLoginUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { response, json } = await loginUser(formData);
      if (response.status === 200) login(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <form
        onSubmit={handleSubmit}>
        <h2 className="h2">Log In</h2>
        <TypedInput
          type="email"
          label="Email Address"
          name="email"
          autocomplete="email"
          onChange={handleChange}
        />
        <TypedInput
          type="password"
          label="Password"
          name="password"
          autocomplete="password"
          onChange={handleChange}
        />
        <button className="button lazuli" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
