import PropTypes from "prop-types";
import GearThumbnail from "./GearThumbnail";

const GearList = ({ gearList }) => {
  console.log(gearList.length);
  return (
    gearList.length > 0 && (
      <ul>
        {gearList.map((item, index) => (
          <li key={`item-${item.id}`}>
            <GearThumbnail item={item} />
          </li>
        ))}
      </ul>
    )
  );
};

GearList.propTypes = {
  gearList: PropTypes.array.isRequired,
};

export default GearList;
