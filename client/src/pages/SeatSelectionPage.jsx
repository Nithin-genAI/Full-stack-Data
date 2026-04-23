import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaBus } from 'react-icons/fa';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SeatSelector from '../components/seats/SeatSelector';
import BusInfoPanel from '../components/seats/BusInfoPanel';
import { getBusDetails, generateSeatLayout, generateBookedSeats } from '../utils/mockData';
import './SeatSelectionPage.css';

export default function SeatSelectionPage() {
  const { busId } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boardingPoint, setBoardingPoint] = useState('');
  const [droppingPoint, setDroppingPoint] = useState('');

  useEffect(() => {
    const fetchBus = async () => {
      setLoading(true);
      const data = await getBusDetails(busId);
      if (data) {
        setBus(data);
        setBoardingPoint(data.boardingPoints?.[0] || '');
        setDroppingPoint(data.droppingPoints?.[0] || '');
      }
      setLoading(false);
    };
    fetchBus();
  }, [busId]);

  const seatLayout = useMemo(() => {
    if (!bus) return null;
    const layout = generateSeatLayout(bus.type, bus.seatsTotal);
    const bookedCount = bus.seatsTotal - bus.seatsAvailable;
    return generateBookedSeats(layout, bookedCount);
  }, [bus]);

  const handleSeatClick = (seat) => {
    setSelectedSeats(prev => {
      const exists = prev.find(s => s.id === seat.id);
      if (exists) return prev.filter(s => s.id !== seat.id);
      if (prev.length >= 6) return prev; // Max 6 seats
      return [...prev, seat];
    });
  };

  const totalPrice = selectedSeats.length * (bus?.basePrice || 0);

  if (loading) {
    return (
      <div className="seat-page" id="seat-selection-page">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner" />
            <span className="loading-text">Loading bus details...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!bus) {
    return (
      <div className="seat-page" id="seat-selection-page">
        <div className="container">
          <div className="no-results">
            <h3>Bus not found</h3>
            <Button variant="primary" onClick={() => navigate('/')}>Go Home</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="seat-page" id="seat-selection-page">
      <div className="container">
        {/* Page Header */}
        <div className="seat-page-header clay-card">
          <button className="seat-back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
          <div className="seat-page-route">
            <span>{bus.departure.location}</span>
            <FaBus className="seat-route-icon" />
            <span>{bus.arrival.location}</span>
          </div>
          <div className="seat-page-meta">
            <span className="seat-page-operator">{bus.operatorName}</span>
            <span className="seat-page-bus-name">{bus.busName}</span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="seat-page-layout">
          {/* Left: Seat selector */}
          <div className="seat-page-left">
            <Card className="seat-view-card">
              <h3 className="seat-view-title">
                <FaBus /> Select Your Seats
              </h3>
              <p className="seat-view-subtitle">Click on available seats to select (max 6)</p>
              <SeatSelector
                layout={seatLayout}
                selectedSeats={selectedSeats}
                onSeatClick={handleSeatClick}
                womenBooking={false}
              />
            </Card>

            {/* Selected Seats Summary */}
            {selectedSeats.length > 0 && (
              <Card className="seat-summary-card animate-fade-in-up">
                <h4 className="seat-summary-title">Selected Seats</h4>
                <div className="seat-summary-seats">
                  {selectedSeats.map(s => (
                    <span key={s.id} className="seat-summary-chip">
                      {s.id}
                      <span className="seat-type-badge">{s.type}</span>
                    </span>
                  ))}
                </div>
                <div className="seat-summary-price">
                  <div>
                    <span className="seat-summary-count">{selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''}</span>
                    <span className="seat-summary-calc"> × ₹{bus.basePrice.toLocaleString()}</span>
                  </div>
                  <span className="seat-summary-total">₹{totalPrice.toLocaleString()}</span>
                </div>
                <Button variant="primary" size="large" fullWidth id="continue-booking-btn">
                  Continue to Passenger Details <FaArrowRight />
                </Button>
              </Card>
            )}
          </div>

          {/* Right: Bus Info */}
          <div className="seat-page-right">
            <BusInfoPanel
              bus={bus}
              boardingPoint={boardingPoint}
              setBoardingPoint={setBoardingPoint}
              droppingPoint={droppingPoint}
              setDroppingPoint={setDroppingPoint}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
