import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import GearThumbnailActions from "./GearThumbnailActions";


const GearThumbnail = ({ item, featured = false }) => {
  const params = useParams();
  const location = useLocation();
  const { hash, pathname, search } = location;
  console.log({location})
  // const route = useRoute();
  console.log(params)

  return (
    <div className={"gear-thumbnail" + (featured ? "featured" : "")}>
      <img src="/wave.png" />
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
