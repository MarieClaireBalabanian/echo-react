import PropTypes from "prop-types";
import { AddressAutofill } from "@mapbox/search-js-react";

const AddressAuto = ({ onChange }) => {
  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  const handleRetrieve = (selectedItem) => {
    const data = selectedItem.features[0];
    const fixedCoords = data.geometry.coordinates.map((x) => x.toFixed(4));
    onChange("coords", fixedCoords.toString());
    onChange("location", `${data.properties.place}, ${data.properties.region_code}`);
  };
  return (
    <div className="address-autofill">
      <AddressAutofill
        accessToken={token}
        onRetrieve={handleRetrieve}
        required>
        <label htmlFor="address">Address*</label>
        <input
          name="address"
          aria-required="true"
          id="address"
          type="text"
          autoComplete="address1"
        />
      </AddressAutofill>
    </div>
  );
};

AddressAuto.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AddressAuto;
