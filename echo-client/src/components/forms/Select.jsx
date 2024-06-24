import PropTypes from 'prop-types';

// Required defaults to true

// TODO: client-side validation, implement appropriate aria attributes

const Select = ({name, label, options, required=true, onChange}) => {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="form-field">
            <label htmlFor={`select-${name}`}>
                { label }
                { required && <span aria-hidden="true">*</span> }
            </label>
            <select 
                id={`select-${name}`}
                onChange={handleChange}
                required={required}
                multiple={true}
            >
                { 
                    options.length > 0 && options.map((option, index) => (
                        <option key={`select-${name}-${index}`} value={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </div>
  )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default Select
