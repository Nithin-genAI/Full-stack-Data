import { FaWifi, FaPlug, FaLightbulb, FaBed, FaTint, FaMapMarkerAlt, FaClock, FaBus, FaShieldAlt, FaStar } from 'react-icons/fa';
import Card from '../common/Card';
import './BusInfoPanel.css';

const amenityIcons = {
  'WiFi': <FaWifi />,
  'Charging Point': <FaPlug />,
  'Reading Light': <FaLightbulb />,
  'Blanket': <FaBed />,
  'Water Bottle': <FaTint />,
  'GPS Tracking': <FaMapMarkerAlt />,
  'CCTV': <FaShieldAlt />,
};

export default function BusInfoPanel({ bus, boardingPoint, setBoardingPoint, droppingPoint, setDroppingPoint }) {
  if (!bus) return null;

  return (
    <div className="bus-info-panel" id="bus-info-panel">
      {/* Highlights */}
      <Card className="info-section">
        <h3 className="info-section-title">✨ Highlights</h3>
        <div className="highlights-grid">
          {bus.amenities.map(amenity => (
            <div key={amenity} className="highlight-item">
              <span className="highlight-icon">{amenityIcons[amenity] || '✦'}</span>
              <span className="highlight-text">{amenity}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Journey Details */}
      <Card className="info-section">
        <h3 className="info-section-title">ℹ️ Journey Details</h3>
        <div className="detail-row">
          <FaClock className="detail-icon" />
          <div>
            <span className="detail-label">Departure</span>
            <span className="detail-value">{bus.departure.time} — {bus.departure.location}</span>
          </div>
        </div>
        <div className="detail-row">
          <FaClock className="detail-icon" style={{ color: 'var(--color-accent-400)' }} />
          <div>
            <span className="detail-label">Arrival</span>
            <span className="detail-value">{bus.arrival.time}{bus.arrival.nextDay ? ' (+1)' : ''} — {bus.arrival.location}</span>
          </div>
        </div>
        <div className="detail-row">
          <FaBus className="detail-icon" />
          <div>
            <span className="detail-label">Duration</span>
            <span className="detail-value">{bus.duration} | {bus.distance}</span>
          </div>
        </div>
        <div className="detail-row">
          <FaStar className="detail-icon" style={{ color: '#FFB74D' }} />
          <div>
            <span className="detail-label">Rating</span>
            <span className="detail-value">{bus.rating} ★ ({bus.reviewCount} reviews)</span>
          </div>
        </div>
      </Card>

      {/* Boarding & Dropping */}
      <Card className="info-section">
        <h3 className="info-section-title">📍 Boarding & Dropping</h3>
        <div className="point-select-group">
          <label className="point-label">Boarding Point</label>
          <select
            className="point-select"
            value={boardingPoint}
            onChange={(e) => setBoardingPoint(e.target.value)}
            id="boarding-point-select"
          >
            {bus.boardingPoints?.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="point-select-group">
          <label className="point-label">Dropping Point</label>
          <select
            className="point-select"
            value={droppingPoint}
            onChange={(e) => setDroppingPoint(e.target.value)}
            id="dropping-point-select"
          >
            {bus.droppingPoints?.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </Card>

      {/* Cancellation */}
      <Card className="info-section">
        <h3 className="info-section-title">📜 Cancellation Policy</h3>
        <p className="cancellation-text">{bus.cancellationPolicy}</p>
      </Card>
    </div>
  );
}
