import { useState } from 'react';

import TypedInput from './TypedInput'
import Select from './Select';
import TextArea from './TextArea'

import { useDispatch, useSelector } from "react-redux";
import { setUserGear } from "../../features/gear/gearSlice";
import { createGearItem } from "../../api/gear"


const AddGearForm = () => {
  const dispatch = useDispatch();

  const gearCategories = useSelector(state => state.categories)
  const userLocation = useSelector(state => state.user.location)
  const gearList = useSelector(state => state.gear)

  const [formData, setFormData] = useState({
    title: '',
    makeModel: '',
    description: '',
    categories: [],
    location: userLocation
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
      const { response, json } = await createGearItem(formData)
      if (response.status === 201) console.log(json)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-with-padding">
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
