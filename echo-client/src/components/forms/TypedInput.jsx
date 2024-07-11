import PropTypes from "prop-types";

// Required defaults to true

// TODO: client-side validation, implement appropriate aria attributes

const TypedInput = ({ type, name, label, required = true, autocomplete, value, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        // aria-required={ required ? 'true' : null}
        autoComplete={autocomplete ? autocomplete : "off"}
        onChange={handleChange}
      />
    </div>
  );
};

TypedInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autocomplete: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TypedInput;
