import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import GearThumbnailActions from "./GearThumbnailActions";
import GearThumbnailBookmark from './GearThumbnailBookmark';
import '../../assets/styles/components/_GearThumbnail.scss';

const GearThumbnail = ({ item, featured = false }) => {
  const detailLink = `/gear/${item.id}`;
  const params = useParams();
  const belongsToUser = !!params.username;
  
  return (
    item && 
      <div className={"gear-thumbnail h-full bg-white" + (featured ? "featured" : "")}>
        <Link to={detailLink}>
          <img src="/wave.png" />
        </Link>
        <div className="copy">
          { item.Categories?.length > 0 &&
            <ul className="categories tags-list">
                { item.Categories.map(cat => 
                  <li className="tag" key={`${item.id}${cat.id}`}>
                    <Link to={`/gear/categories/${cat.slug}`}>{cat.name}</Link>
                  </li>
                )}
            </ul>
          }
          <Link to={detailLink}>
            <h3 className="h3">{item.title}</h3>
          </Link>
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
