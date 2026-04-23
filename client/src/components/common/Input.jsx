import '../../styles/claymorphism.css';

export default function Input({
  icon,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  id,
  className = '',
  onFocus,
  onBlur,
}) {
  return (
    <div className={`clay-input-wrapper ${className}`}>
      {icon && <span className="clay-input-icon">{icon}</span>}
      <input
        className="clay-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        id={id}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
      />
    </div>
  );
}
