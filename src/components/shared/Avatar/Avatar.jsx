function Avatar({ src, alt = 'User avatar', size = 'medium' }) {
    const sizeClasses = {
        small: 'avatar-small',
        medium: 'avatar-medium',
        large: 'avatar-large',
    };

    return (
        <img
            src={src}
            alt={alt}
            className={`avatar ${sizeClasses[size]}`}
        />
    );
}

export default Avatar;