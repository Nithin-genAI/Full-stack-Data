import '../../styles/claymorphism.css';

export default function Card({
  children,
  hoverable = true,
  onClick,
  className = '',
  inset = false,
  id,
  style,
}) {
  const baseClass = inset ? 'clay-card-inset' : 'clay-card';

  return (
    <div
      className={`${baseClass} ${hoverable && !inset ? 'clay-card-hoverable' : ''} ${className}`}
      onClick={onClick}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
}
