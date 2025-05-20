import { useState } from "react";
import { createUser } from "../../api/user";
import useLoginUser from "../../hooks/useLoginUser";
import TypedInput from "./TypedInput";
import AddressAuto from "./AddressAuto";

const SignUpForm = () => {
  const login = useLoginUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    coords: "",
    location: "",
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
      const { response, json } = await createUser(formData);
      if (response.status === 201) login(json)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-form">
      <form
        onSubmit={handleSubmit}>
        <h2 className="h2">Sign Up</h2>
        <TypedInput
          type="text"
          label="Full Name"
          name="name"
          autocomplete="name"
          onChange={handleChange}
        />
        <TypedInput
          type="email"
          label="Email Address"
          name="email"
          autocomplete="email"
          onChange={handleChange}
        />
        <TypedInput
          type="text"
          label="Username"
          name="username"
          autocomplete="username"
          onChange={handleChange}
        />
        <TypedInput
          type="password"
          label="Password"
          name="password"
          autocomplete="new-password"
          onChange={handleChange}
        />
        <AddressAuto onChange={handleChange} />
        <button className="button lazuli" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
