
import { AddressAutofill } from '@mapbox/search-js-react';
import PropTypes from 'prop-types';

const AddressAuto = ({onChange}) => {
    const token = import.meta.env.VITE_MAPBOX_TOKEN;

    const handleRetrieve = (selectedItem) => {
        const data = selectedItem.features[0];
        const fixedCoords = data.geometry.coordinates.map((x) => x.toFixed(4));
        onChange("geo", fixedCoords.toString());
        onChange("address", `${data.properties.place}, ${data.properties.region_code}`);

    };
    return (
        <div>
            <AddressAutofill accessToken={token} country="us" onRetrieve={handleRetrieve}>
                <label htmlFor="address">Address</label>
                <input name="address"
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
    onChange: PropTypes.func.isRequired
};

export default AddressAuto;
