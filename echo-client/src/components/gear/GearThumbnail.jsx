import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GearThumbnailActions from "./GearThumbnailActions";

const GearThumbnail = ({ item, featured = false }) => {
  return (
    <div className={"gear-thumbnail border-with-padding" + (featured ? "featured" : "")}>
      <img src="https://picsum.photos/200/300" />
      <div className="copy">
        <h3>{item.title}</h3>
        <h4>{item.makeModel}</h4>
        <p>{item.location}</p>
        {featured && <p>{item.description}</p>}
      </div>
      <GearThumbnailActions
        gearId={item.id}
        title={item.title}
      />
    </div>
  );
};

GearThumbnail.propTypes = {
  item: PropTypes.object.isRequired,
  featured: PropTypes.bool,
};

export default GearThumbnail;
