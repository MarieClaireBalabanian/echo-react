
import PropTypes from 'prop-types';

// Required defaults to true
// TODO: client-side validation, implement appropriate aria attributes

const TextArea = ({name, label, required=true, value, onChange}) => {

    const handleChange = (e) => {
        const { value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="form-field">
            <label htmlFor={name}>
                {label}
                {
                    required && <span aria-hidden="true">*</span>
                }
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                required={required}
                // aria-required={ required ? 'true' : null}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
  )
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextArea
