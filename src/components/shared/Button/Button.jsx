function Button({
    children,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
    type = 'button'
}) {
    const baseClasses = 'button';

    const sizeClasses = {
        small: 'button-small',
        medium: 'button-medium',
        large: 'button-large'
    };

    const variantClasses = {
        primary: 'button-primary',
        secondary: 'button-secondary',
        outline: 'button-outline',
        danger: 'button-danger',
        ghost: 'button-ghost'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'button-full-width' : ''}`}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
}

export default Button;