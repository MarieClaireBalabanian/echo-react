import { useEffect } from "react";
import GearList from "../../components/gear/GearList";
import AddGearForm from "../../components/forms/AddGearForm";
import { useDispatch, useSelector } from "react-redux";
import { setUserGear } from "../../features/gear/gearSlice";
import { getUserGearItems } from "../../api/gear";

const UserGear = () => {
  const userId = useSelector((state) => state.user.id);
  const gearList = useSelector((state) => state.gear);
  console.log(gearList)
  const dispatch = useDispatch();
  
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
      {gearList.length && <GearList gearList={gearList} />}
      <AddGearForm />
    </div>
  );
};

export default UserGear;
