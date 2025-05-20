

const Select = ({ id, name, label, options, onChange }) => {

    const handleChange = (e) => {
        const { value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} onChange={handleChange}>
                {options.map((option) =>
                    <option value={option.value} key={option.value}>{option.label}</option>
                )};
            </select>
        </div>
    );
};

export default Select; 