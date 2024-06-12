import { useState } from 'react';
import { useSelector } from 'react-redux';
import TypedInput from './TypedInput'
import Select from './Select';
import TextArea from './TextArea'


const AddGearForm = () => {
  const echo_api = import.meta.env.VITE_API_URL;
  const gearCategories = useSelector(state => state.categories)

  const [formData, setFormData] = useState({
    title: '',
    makeModel: '',
    description: '',
    categories: [],
    address: 'Seattle, WA'
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
      const response = await fetch(`${echo_api}/gear/create`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      const json = await response.json();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Gear</h2>
      <TypedInput 
          type="text"
          label="Title"
          name="add-gear-title"
          autocomplete="off"
          onChange={handleChange}
        />
        <TypedInput 
          type="text"
          label="Make & Model"
          name="add-gear-make-model"
          autocomplete="off"
          onChange={handleChange}
        />
        <Select
          name="categories"
          label="Categories"
          options={gearCategories}
          onChange={handleChange}
        />
        <TextArea 
          label="Description"
          name="add-gear-desc"
          onChange={handleChange}
        />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddGearForm;
