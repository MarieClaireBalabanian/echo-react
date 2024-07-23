import { useEffect, useState } from "react";
import GearList from "../../components/GearList";
import AddGearForm from "../../components/forms/AddGearForm";
import { useDispatch, useSelector } from "react-redux";
import { setUserGear } from "../../features/gear/gearSlice";
import { getUserGearItems } from "../../api/gear";

const UserGear = () => {
  const userId = useSelector((state) => state.user.id);
  const gearList = useSelector((state) => state.gear);
  const dispatch = useDispatch();

  const [view, setView] = useState('GearList');



  useEffect(() => {
    const fetchUserGear = async () => {
      try {
        const res = await getUserGearItems(userId);
        dispatch(setUserGear(res.gear));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserGear();
  }, [dispatch, userId]);

  return (
    <div>
      <h1>My Gear</h1>
      { view === 'GearList' && <button className="button lazuli" onClick={() => setView('AddGearForm')}>Add Gear</button> }
      { view === 'AddGearForm' && 
         <div>
          <button className="button orange" onClick={() => setView('GearList')}>Cancel</button>
          <AddGearForm /> 
         </div>
      }

      { gearList.length > 0 ?
        <GearList gearList={gearList}  />
        :
        <h2>You have no gear!</h2>
      }
    </div>
  );
};

export default UserGear;
