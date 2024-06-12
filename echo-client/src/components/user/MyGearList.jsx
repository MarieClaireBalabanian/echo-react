import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MyGearList = () => {
  const { username } = useParams()

  return (
      <div>
            My Gear List
      </div>
  )
}

export default MyGearList
