import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import GearThumbnail from './GearThumbnail';

const GearList = ({ gearList }) => {
  return (
      <ul>
            { 
                gearList && gearList.map((item, index) => (
                    <li key={`item-${item.id}`}>
                        <GearThumbnail item={item} />
                    </li>
                ))
            }
      </ul>
    )
}

GearList.propTypes = {
    gearList: PropTypes.array.isRequired
}

export default GearList
