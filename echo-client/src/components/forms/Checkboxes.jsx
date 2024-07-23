import PropTypes from "prop-types";
import { useState } from 'react';
// Required defaults to true

// TODO: client-side validation, implement appropriate aria attributes

const Checkboxes = ({ name, label, options, required = true, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleOptions = (e) => {
    const { value } = e.target;
    const updatedSelection = [...selectedOptions];
    const isSelected = updatedSelection.includes(value);

    if (isSelected) updatedSelection.splice(updatedSelection.indexOf(value), 1);
    else updatedSelection.push(value);

    setSelectedOptions(updatedSelection);
    onChange(name, updatedSelection);
  };
  
  return (
    <fieldset className="form-field">
      <legend>
        {label}
        {required && <span aria-hidden="true">*</span>}
      </legend>
      <div className="checkboxes grid grid-4">
        {options.length > 0 && options.map((option, index) => (
        <div className="checkbox-wrapper" key={`select-${name}-${index}`}>
          <input
            type="checkbox"
            id={`checkbox-${option.id}`}
            value={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={handleToggleOptions}
          />
          <label htmlFor={`checkbox-${option.id}`}>{option.name}</label>
        </div>
      ))}
      </div>
    </fieldset>
  );
};

Checkboxes.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkboxes;
