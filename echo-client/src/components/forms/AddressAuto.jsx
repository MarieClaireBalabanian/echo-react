
import { AddressAutofill } from '@mapbox/search-js-react';
import PropTypes from 'prop-types';

const AddressAuto = ({onChange}) => {
    const token = import.meta.env.VITE_MAPBOX_TOKEN;

    const handleRetrieve = (selectedItem) => {
        let coordinates = selectedItem.features[0].geometry.coordinates;
        const fixedCoords = coordinates.map((x) => x.toFixed(4));
        onChange("address", fixedCoords.toString());
    };
    return (
        <div>
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
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
