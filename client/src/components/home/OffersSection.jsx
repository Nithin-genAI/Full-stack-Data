import { offers } from '../../utils/mockData';
import Card from '../common/Card';
import { FaChevronRight } from 'react-icons/fa';
import './OffersSection.css';

export default function OffersSection() {
  return (
    <section className="offers-section" id="offers-section">
      <div className="container">
        <div className="section-title-row">
          <h2 className="section-title">Offers for you</h2>
          <span className="section-view-more">View more <FaChevronRight size={12} /></span>
        </div>

        <div className="offers-grid">
          {offers.map((offer, idx) => (
            <Card key={offer.id} className={`offer-card stagger-${idx + 1}`} id={`offer-${offer.id}`}>
              <div className="offer-card-bg" style={{ background: offer.gradient }} />
              <div className="offer-card-content">
                <span className="offer-icon">{offer.icon}</span>
                <h4 className="offer-title">{offer.title}</h4>
                <div className="offer-code-row">
                  <span className="offer-code">{offer.code}</span>
                  <span className="offer-valid">Valid till {offer.validTill}</span>
                </div>
              </div>
              <div className="offer-bus-illustration">🚌</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
