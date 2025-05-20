import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import '../../assets/styles/components/_CategoryThumbnail.scss';

const CategoryThumbnail = ({ category }) => {

  return (
      <li className="category-thumbnail">
        <a href={`/gear/categories/${category.id}`}>      
          <img src="/wave.png" />

        {category.name}
        </a>
      </li>
  );
};

CategoryThumbnail.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryThumbnail;
