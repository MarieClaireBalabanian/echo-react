import { useDispatch, useSelector } from "react-redux";
import { setUserGear } from "../../features/gear/gearSlice";
import { deleteUserGearItem } from "../../api/gear";

import PropTypes from "prop-types";

const DeleteGearForm = ({ gearItem }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const { response, json } = await deleteUserGearItem(user.id, gearItem.id);
      if (response.status === 200) {
        dispatch(setUserGear(json.gear));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <form onSubmit={handleDelete}>
          <h2>Are you sure you want to delete {gearItem.title}?</h2>
          <button className="button orange" type="submit">Delete</button>
        </form>
    </div>
  );
 }

DeleteGearForm.propTypes = {
  gearItem: PropTypes.object.isRequired,
};

 export default DeleteGearForm;