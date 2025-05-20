import { useSelector } from "react-redux";
import CategoryThumbnail from "../../components/gear/CategoryThumbnail";
import '../../assets/styles/components/_GearThumbnail.scss';

const GearCategoriesIndex = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="container">
      {
        categories && categories.length > 0 ? (
          <div>
            <h1 className="h1 text-center">All Categories</h1>
            <ul className="grid mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4">
              {
                categories.map((category) => {
                  <CategoryThumbnail category={category} key={category.id} />
                })
              }
            </ul>
          </div>
        ) : 
        (
          <p className="h3">No categories found</p>
        )
      }
    </div>
  );
};

export default GearCategoriesIndex;




