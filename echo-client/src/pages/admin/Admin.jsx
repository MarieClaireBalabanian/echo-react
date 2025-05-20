import { useEffect, useState } from "react";

// TO DO, edit, delete, add items functionality

const Admin = () => {
  const [categories, setCategories] = useState([]);

  const handleEditItem = () => {};
  const handleDeleteItem = () => {};

  const handleAddItem = async (e, name, value) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/category/create-category?name=${value}`,
        {
          method: "post",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/category/get-all-categories`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setCategories((prevState) => [...prevState, ...data.categories]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="admin-categories">
      {categories.length > 0 && (
        <ul>
          {categories.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleEditItem(index)}>Edit</button>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
