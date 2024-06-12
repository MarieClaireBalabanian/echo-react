import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TypedInput from './TypedInput'
import AddressAuto from './AddressAuto';

const SignUpForm = () => {
  const echo_api = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    geo: '',
    address: ''
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${echo_api}/users/signup/`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      const json = await response.json();

      if (response.status === 201) {
        navigate(`/user/${json.username}`)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit} className="border-with-padding">
        <h2>Sign Up</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
