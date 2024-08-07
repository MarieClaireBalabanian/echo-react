import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import GearThumbnailActions from "./GearThumbnailActions";
import GearThumbnailBookmark from './GearThumbnailBookmark';
import '../assets/styles/components/_GearThumbnail.scss';

const GearThumbnail = ({ item, featured = false }) => {
  const detailLink = `/gear/${item.id}`;
  const params = useParams();
  const belongsToUser = !!params.username;
  
  return (
    <div className={"gear-thumbnail" + (featured ? "featured" : "")}>
      <img src="/wave.png" />
      <div className="copy">
        { item.Categories?.length > 0 &&
          <ul className="categories tags-list">
              { item.Categories.map((cat, index) => {
                return (
                  <li className="tag" key={`${item.id}${cat.id}${index}`}>
                    <Link to={`/gear/categry/${cat.id}`}>{cat.name}</Link>
                  </li>
                )
              })}
          </ul>
        }
        <Link to={detailLink}>
          <h3 className="h3">{item.title}</h3>
        </Link>
        <h4 className="h4">{item.makeModel}</h4>
        { !belongsToUser &&  <Link>{item.location}</Link> }
        { belongsToUser && <GearThumbnailActions gearItem={item} /> }
        { !belongsToUser && <GearThumbnailBookmark gearItem={item} /> }
      </div>
    </div>
  );
};

GearThumbnail.propTypes = {
  item: PropTypes.object.isRequired,
  featured: PropTypes.bool,
};

export default GearThumbnail;
