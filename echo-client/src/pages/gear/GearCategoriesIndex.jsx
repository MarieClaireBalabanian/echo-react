import { useSelector } from "react-redux";
import CategoryThumbnail from "../../components/CategoryThumbnail";
import '../../assets/styles/components/_GearThumbnail.scss';

const GearCategoriesIndex = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="container">
      {
        categories && categories.length > 0 ? (
          <div>
            <h1 className="h1 text-center">Gear Categories</h1>
            <ul className="grid grid-3">
              {
                categories.map((category) => {
                  return <CategoryThumbnail category={category} key={category.id} />
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




