import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/login/', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      const json = await response.json();
      navigate(`/user/${json.username}`)

    } catch (error) {
        console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
