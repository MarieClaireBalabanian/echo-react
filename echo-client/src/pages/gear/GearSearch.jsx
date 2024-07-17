import { useEffect, useState } from "react";
import GearList from "../../components/gear/GearList";
import AddGearForm from "../../components/forms/AddGearForm";
import { useSelector } from "react-redux";

import { getAllGearItems } from "../../api/gear";

const GearSearch = () => {
  const userId = useSelector((state) => state.user.id);

  const [ gearList, setGearList ] = useState(null)

  const fetchAllGear = async () => {
    try {
      const { response, json } = await getAllGearItems(userId);
      console.log(json.gear)
      setGearList(json.gear);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllGear();
  }, []);

  return (
    <div>
      {gearList ? <GearList gearList={gearList} /> : <h1>No results found</h1>}
    </div>
  );
};

export default GearSearch;
