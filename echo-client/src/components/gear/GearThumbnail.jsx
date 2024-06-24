import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const GearThumbnail = ({ item, featured=false }) => {
    return (
        <div className={ featured ? 'featured' : '' }>
            
            <img src="https://picsum.photos/200/300" />
            <h3>{item.title}</h3>
            <h4>{item.makeModel}</h4>
            <p>{item.location}</p>
            {
                featured && <p>{item.description}</p>
            }
        </div>
    )
}

GearThumbnail.propTypes = {
    item: PropTypes.object.isRequired,
    featured: PropTypes.bool
}

export default GearThumbnail
