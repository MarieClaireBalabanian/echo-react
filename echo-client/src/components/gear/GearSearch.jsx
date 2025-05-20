import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useParams } from 'react-router-dom';
import { searchGearItems } from "../../api/gear";
import CategoryCheckboxes from '../forms/Checkboxes';
import TypedInput from "../forms/TypedInput";
import GearThumbnail from './GearThumbnail';
import AddressAuto from "../forms/AddressAuto";
import Select from "../forms/Select";

const distanceOptions = [
  { value: "10", label: "10 miles" },
  { value: "25", label: "25 miles" },
  { value: "50", label: "50 miles" },
  { value: "100", label: "100 miles" },
];

const GearSearch = ({ showCategories = false }) => {
  const userId = useSelector((state) => state.user?.id);
  const gearCategories = useSelector((state) => state.categories);
  const { categorySlug } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [gearItems, setGearItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });

  // Get form data directly from search params
  const formData = {
    keyword: searchParams.get('keyword') || "",
    distance: searchParams.get('distance') || "",
    location: searchParams.get('location') || "",
    categories: searchParams.get('categories')?.split(',').filter(Boolean) ||
      (categorySlug ? [categorySlug] : []),
    distance: searchParams.get('distance') || "",
    coords: searchParams.get('coords') || "",
    page: parseInt(searchParams.get('page') || '1'),
  };

  // Handle form change
  const handleChange = useCallback((name, value) => {
    const newParams = new URLSearchParams(searchParams);

    if (Array.isArray(value)) value.length > 0 ? newParams.set(name, value.join(',')) : newParams.delete(name);
    else value && value.trim() !== '' ? newParams.set(name, value) : newParams.delete(name);

    if (name !== 'page') newParams.set('page', '1');

    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  // Ppagination
  const handlePageChange = useCallback((page) => {
    handleChange('page', page.toString());
  }, [handleChange]);

  // Fetch
  useEffect(() => {
    const fetchGear = async () => {
      setLoading(true);
      try {
        const apiParams = new URLSearchParams(searchParams);

        if (userId) apiParams.append('excludeUserId', userId);

        // For category detail page usage
        if (categorySlug && !apiParams.has('categories')) {
          const category = gearCategories.find(cat => cat.slug === categorySlug);
          if (category) apiParams.append('categories', category.id);
        }

        const { json, error } = await searchGearItems(apiParams);

        if (error) throw error;

        setGearItems(json.items || []);
        setPagination({
          currentPage: formData.page,
          totalPages: json.pagination?.totalPages || 1,
          totalItems: json.pagination?.totalItems || 0,
        });
      } catch (error) {
        console.error('Error fetching gear:', error);
        setGearItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGear();
  }, [searchParams, userId, categorySlug, gearCategories, formData.page]);

  return (
    <div className="gear-search p-64-96">
      <div className="container">
        <h1 className="h2 text-center">Find Gear</h1>
        <form className="search-gear-form" onSubmit={(e) => e.preventDefault()}>
          <TypedInput
            type="text"
            label="Keyword Search"
            name="keyword"
            autocomplete="off"
            onChange={handleChange}
            value={formData.keyword}
            required={false}
          />

          <div className="geo-search grid grid-cols-2">
            <AddressAuto onChange={handleChange} />
            <Select
              id="distance"
              name="distance"
              label="Distance"
              options={distanceOptions}
              onChange={handleChange}
              required={false}
              selectedOptions={formData.distance}
            />
          </div>

          {showCategories && (
            <CategoryCheckboxes
              name="categories"
              label="Categories"
              options={gearCategories}
              onChange={handleChange}
              required={false}
              selectedOptions={formData.categories}
            />
          )}
        </form>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {gearItems.length > 0 ? (
              <div className="gear-grid grid mobile:grid-cols-2 tablet:grid-cols-3 desktop-lg:grid-cols-4">
                {gearItems.map(item => (
                  <GearThumbnail key={`gear-search-${item.id}`} item={item} />
                ))}
              </div>
            ) : (
              <div className="no-results">No gear items found</div>
            )}

            {pagination.totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage <= 1}
                >
                  Previous
                </button>

                {Array.from({ length: pagination.totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={pagination.currentPage === i + 1 ? 'active' : ''}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage >= pagination.totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GearSearch;