import '../../styles/claymorphism.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  id,
  className = '',
}) {
  const variantClass = {
    primary: 'clay-btn-primary',
    secondary: 'clay-btn-secondary',
    outline: 'clay-btn-outline',
  }[variant];

  const sizeClass = {
    small: 'clay-btn-sm',
    medium: 'clay-btn-md',
    large: 'clay-btn-lg',
  }[size];

  return (
    <button
      className={`clay-btn ${variantClass} ${sizeClass} ${fullWidth ? 'clay-btn-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
}
