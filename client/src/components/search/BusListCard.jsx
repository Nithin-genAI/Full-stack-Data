import { useNavigate } from 'react-router-dom';
import { FaStar, FaClock, FaMapMarkerAlt, FaChair, FaArrowRight } from 'react-icons/fa';
import { AMENITY_ICONS } from '../../utils/constants';
import Button from '../common/Button';
import './BusListCard.css';

export default function BusListCard({ bus }) {
  const navigate = useNavigate();

  const handleViewSeats = () => {
    navigate(`/seats/${bus.id}`);
  };

  return (
    <div className="bus-card clay-card clay-card-hoverable" id={`bus-card-${bus.id}`}>
      <div className="bus-card-header">
        <div className="bus-card-operator">
          <div className="bus-card-logo">
            {bus.operatorShortName?.charAt(0) || 'B'}
          </div>
          <div>
            <h3 className="bus-card-operator-name">{bus.operatorName}</h3>
            <p className="bus-card-bus-name">{bus.busName}</p>
          </div>
        </div>
        <div className="bus-card-rating">
          <FaStar className="bus-card-star" />
          <span className="bus-card-rating-val">{bus.rating}</span>
          <span className="bus-card-review-count">({bus.reviewCount})</span>
        </div>
      </div>

      <div className="bus-card-journey">
        <div className="bus-card-time-block">
          <span className="bus-card-time">{bus.departure.time}</span>
          <span className="bus-card-location">{bus.departure.location}</span>
        </div>

        <div className="bus-card-timeline">
          <div className="timeline-dot" />
          <div className="timeline-line" />
          <div className="timeline-duration">
            <FaClock size={10} /> {bus.duration}
          </div>
          <div className="timeline-line" />
          <div className="timeline-dot timeline-dot-end" />
        </div>

        <div className="bus-card-time-block bus-card-time-block-end">
          <span className="bus-card-time">
            {bus.arrival.time}
            {bus.arrival.nextDay && <sup className="next-day">+1</sup>}
          </span>
          <span className="bus-card-location">{bus.arrival.location}</span>
        </div>

        <div className="bus-card-price">
          <span className="bus-card-price-val">₹{bus.basePrice.toLocaleString()}</span>
        </div>
      </div>

      <div className="bus-card-footer">
        <div className="bus-card-meta">
          <span className="bus-card-seats">
            <FaChair /> {bus.seatsAvailable} seats
          </span>
          <div className="bus-card-amenities">
            {bus.amenities.slice(0, 4).map(a => (
              <span key={a} className="clay-chip" title={a}>
                {AMENITY_ICONS[a] || '✦'} {a}
              </span>
            ))}
            {bus.amenities.length > 4 && (
              <span className="clay-chip">+{bus.amenities.length - 4}</span>
            )}
          </div>
        </div>
        <Button variant="primary" size="small" onClick={handleViewSeats} id={`view-seats-${bus.id}`}>
          View Seats <FaArrowRight size={12} />
        </Button>
      </div>
    </div>
  );
}
