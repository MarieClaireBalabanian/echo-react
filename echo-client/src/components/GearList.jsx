import PropTypes from "prop-types";
import GearThumbnail from "./GearThumbnail";

const GearList = ({ gearList }) => {
  return (
    gearList.length > 0 && (
      <ul className="grid grid-3">
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
