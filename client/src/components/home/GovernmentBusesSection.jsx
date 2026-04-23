import { govBuses } from '../../utils/mockData';
import Card from '../common/Card';
import { FaStar, FaBus } from 'react-icons/fa';
import './GovernmentBusesSection.css';

export default function GovernmentBusesSection() {
  return (
    <section className="gov-section" id="gov-buses-section">
      <div className="container">
        <div className="section-title-row">
          <h2 className="section-title">Government Buses</h2>
        </div>

        <div className="gov-grid">
          {govBuses.map((corp, idx) => (
            <Card key={corp.id} className={`gov-card stagger-${idx + 1}`} id={`gov-${corp.id}`}>
              <div className="gov-logo-circle" style={{ background: corp.color }}>
                <FaBus size={20} style={{ color: 'var(--color-primary-600)' }} />
              </div>
              <div className="gov-info">
                <h4 className="gov-name">{corp.name}</h4>
                <p className="gov-regional">{corp.regionalName}</p>
                <div className="gov-rating">
                  <FaStar className="gov-star" />
                  <span>{corp.rating}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
