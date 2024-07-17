import { useEffect, useState } from "react";
import GearList from "../../components/gear/GearList";
import { useSelector } from "react-redux";

import { getAllGearItems } from "../../api/gear";

const GearSearch = () => {
  const userId = useSelector((state) => state.user.id);

  const [ gearList, setGearList ] = useState([])

  const fetchAllGear = async () => {
    try {
      const { response, json } = await getAllGearItems(userId);
      console.log(json.gear)
      setGearList([...json.gear]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllGear();
  }, []);

  return (
    <div className="container grid grid-3">
      {gearList ? <GearList gearList={gearList} /> : <h1>No results found</h1>}
    </div>
  );
};

export default GearSearch;
