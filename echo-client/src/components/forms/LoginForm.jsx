import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/user";
import { setUserProfile } from "../../features/user/userSlice";

import TypedInput from "./TypedInput";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      if (response.status === 200) {
        localStorage.setItem("jwttoken", json.token);
        dispatch(setUserProfile(json.user));
        navigate(`/user/${json.user.username}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <form
        onSubmit={handleSubmit}
        className="border-with-padding">
        <h2>Log In</h2>
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
