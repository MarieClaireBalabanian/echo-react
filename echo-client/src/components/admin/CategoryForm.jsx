import { useState } from "react";

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    catName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/user/login/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Category</h2>
      <div className="form-field">
        <label htmlFor="catName">Name:</label>
        <input
          type="text"
          id="catName"
          name="catName"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <button className="button lazuli" type="submit">Create Category</button>
    </form>
  );
};

export default CategoryForm;
