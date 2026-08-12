function Input({
    label,
    error,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    required = false
}) {
    return (
        <div>
            {label && (
                <label htmlFor={name}>
                    {label}
                    {required && <span> *</span>}
                </label>
            )}

            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                required={required}
            />

            {error && (
                <p>{error}</p>
            )}
        </div>
    );
}

export default Input;