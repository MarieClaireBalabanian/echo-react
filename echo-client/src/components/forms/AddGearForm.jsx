import { useState } from 'react';

import TypedInput from './TypedInput'
import Select from './Select';
import TextArea from './TextArea'

import { useDispatch, useSelector } from "react-redux";
import { setUserGear } from "../../features/gear/gearSlice";
import { createUserGearItem } from "../../api/gear"


const AddGearForm = () => {
  const dispatch = useDispatch();

  const gearCategories = useSelector(state => state.categories)
  const user = useSelector(state => state.user)
  const gearList = useSelector(state => state.gear)

  const [formData, setFormData] = useState({
    title: '',
    makeModel: '',
    description: '',
    categories: [],
    location: user.location
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
      const { response, json } = await createUserGearItem(formData, user.id)
      if (response.status === 201) dispatch(setUserGear([...gearList, json]))
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
          name="title"
          autocomplete="off"
          onChange={handleChange}
        />
        <TypedInput 
          type="text"
          label="Make & Model"
          name="makeModel"
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
          name="description"
          onChange={handleChange}
        />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddGearForm;
