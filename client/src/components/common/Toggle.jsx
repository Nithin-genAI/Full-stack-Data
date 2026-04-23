import '../../styles/claymorphism.css';

export default function Toggle({ checked, onChange, label, id }) {
  return (
    <div className="clay-toggle" onClick={() => onChange(!checked)} id={id}>
      <div className={`clay-toggle-track ${checked ? 'active' : ''}`}>
        <div className="clay-toggle-thumb" />
      </div>
      {label && <span className="clay-toggle-label">{label}</span>}
    </div>
  );
}
