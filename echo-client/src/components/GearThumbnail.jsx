import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import GearThumbnailActions from "./GearThumbnailActions";
import GearThumbnailBookmark from './GearThumbnailBookmark';
import '../assets/styles/components/_GearThumbnail.scss';

const GearThumbnail = ({ item, featured = false }) => {
  const detailLink = `/gear/${item.UserId}/${item.id}`;
  const params = useParams();
  const belongsToUser = !!params.username;
  
  return (
    <Link to={detailLink} className={"gear-thumbnail" + (featured ? "featured" : "")}>
      <img src="/wave.png" />
      <div className="copy">
        <h3>{item.title}</h3>
        <h4>{item.makeModel}</h4>
        <p>{item.location}</p>
        {featured && <p>{item.description}</p>}
        { belongsToUser && <GearThumbnailActions gearItem={item} /> }
        { !belongsToUser && <GearThumbnailBookmark gearItem={item} /> }
      </div>
    </Link>
  );
};

GearThumbnail.propTypes = {
  item: PropTypes.object.isRequired,
  featured: PropTypes.bool,
};

export default GearThumbnail;
