import PropTypes from "prop-types";
import GearThumbnail from "./GearThumbnail";

const GearList = ({ gearList }) => {
  return (
    gearList.length > 0 && (
      <ul className="grid mobile:grid-cols-2 tablet:grid-cols-3 desktop-lg:grid-cols-4">
        {gearList.map((item, index) => (
          <li key={`gear-list-item-${item.id}`}>
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
