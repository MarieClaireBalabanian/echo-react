import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserGear } from "../../features/gear/gearSlice";
import { createUserGearItem } from "../../api/gear";

import TypedInput from "./TypedInput";
import Checkboxes from "./Checkboxes";
import TextArea from "./TextArea";

const AddGearForm = () => {
  const dispatch = useDispatch();

  const gearCategories = useSelector((state) => state.categories);
  const user = useSelector((state) => state.user);
  const gearList = useSelector((state) => state.gear);

  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const [formData, setFormData] = useState({
    title: "",
    makeModel: "",
    description: "",
    categories: [],
    location: user.location,
    coords: user.coords
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
      const { response, json } = await createUserGearItem(formData, user.id);
      if (response.status === 201) dispatch(setUserGear([...gearList, json]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-add-gear">
      <button className={`button ${showForm ? 'orange' : 'lazuli'}`} 
        onClick={toggleShowForm}>{ showForm ? 'Cancel' : 'Add Gear'}
      </button>
      { showForm  && 
        <form onSubmit={handleSubmit}>
          <h2 className="h2">Add Gear</h2>
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
          <Checkboxes
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
          <button className="button lazuli" type="submit">Submit</button>
        </form>
      }
    </div>
  );
};

export default AddGearForm;
