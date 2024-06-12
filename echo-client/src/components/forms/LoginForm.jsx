import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TypedInput from './TypedInput'

const LoginForm = () => {
  const echo_api = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await fetch(`${echo_api}/users/login/`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      const json = await response.json();
      if (response.status === 200) {
        navigate(`/user/${json.username}`)
      }

    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="border-with-padding">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
