import PropTypes from "prop-types";
import { useState, useEffect } from 'react';

const Checkboxes = ({ 
    name, 
    label, 
    options, 
    required = true, 
    onChange,
    selectedOptions: externalSelectedOptions = null // Can be null if no external control like search params
  }) => {

  const [internalSelectedOptions, setInternalSelectedOptions] = useState(
    externalSelectedOptions || []
  );
  
  const isControlled = externalSelectedOptions !== null;
  const selectedOptions = isControlled ? externalSelectedOptions : internalSelectedOptions;
  
  useEffect(() => {
    if (isControlled) {
      setInternalSelectedOptions(externalSelectedOptions);
    }
  }, [isControlled, externalSelectedOptions]);

  const handleToggleOptions = (e) => {
    const { value } = e.target;
    const updatedSelection = [...selectedOptions];
    const isSelected = updatedSelection.includes(value);

    if (isSelected) updatedSelection.splice(updatedSelection.indexOf(value), 1);
    else updatedSelection.push(value);

    // In uncontrolled mode, update internal state
    if (!isControlled) {
      setInternalSelectedOptions(updatedSelection);
    }
    
    onChange(name, updatedSelection);
  };
  
  return (
    <fieldset className="form-field">
      <legend>
        {label}
        {required && <span aria-hidden="true">*</span>}
      </legend>
      <div className="checkboxes grid grid-cols-2 tablet:grid-cols-3 desktop-lg:grid-cols-4">
        {options.length > 0 && options.map((option, index) => (
        <div className="checkbox-wrapper" key={`checkbox-${name}-${index}`}>
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
  selectedOptions: PropTypes.array
};

export default Checkboxes;