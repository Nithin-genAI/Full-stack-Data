import { SEAT_COLORS } from '../../utils/constants';
import './SeatSelector.css';

export default function SeatSelector({ layout, selectedSeats, onSeatClick, womenBooking }) {
  if (!layout || !layout.lowerDeck) return null;

  const getSeatColor = (seat) => {
    if (!seat) return 'transparent';
    if (selectedSeats.find(s => s.id === seat.id)) return SEAT_COLORS.selected;
    if (seat.status === 'booked') return SEAT_COLORS.booked;
    if (womenBooking && seat.type === 'window') return SEAT_COLORS.women;
    return SEAT_COLORS.available;
  };

  const getSeatLabel = (seat) => {
    if (!seat) return '';
    if (selectedSeats.find(s => s.id === seat.id)) return '✓';
    if (seat.status === 'booked') return '✗';
    return seat.id.replace('L', '');
  };

  const handleClick = (seat) => {
    if (!seat || seat.status === 'booked') return;
    onSeatClick(seat);
  };

  return (
    <div className="seat-selector" id="seat-selector">
      {/* Bus shape wrapper */}
      <div className="seat-bus-wrapper">
        {/* Steering */}
        <div className="seat-bus-front">
          <div className="steering-wheel">🎡</div>
          <span className="seat-bus-front-label">Front</span>
        </div>

        {/* Seat grid */}
        <div className="seat-grid">
          {layout.lowerDeck.map((row, rIdx) => (
            <div key={rIdx} className="seat-row">
              {row.map((seat, cIdx) => {
                if (seat === null) {
                  return <div key={cIdx} className="seat-aisle" />;
                }
                const isSelected = selectedSeats.find(s => s.id === seat.id);
                const isBooked = seat.status === 'booked';

                return (
                  <div
                    key={seat.id}
                    className={`seat ${isBooked ? 'seat-booked' : ''} ${isSelected ? 'seat-selected' : ''}`}
                    style={{ '--seat-color': getSeatColor(seat) }}
                    onClick={() => handleClick(seat)}
                    title={`${seat.id} - ${seat.type} ${isBooked ? '(Booked)' : ''}`}
                    id={`seat-${seat.id}`}
                  >
                    <div className="seat-back" />
                    <div className="seat-cushion">
                      <span className="seat-number">{getSeatLabel(seat)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="seat-bus-back">
          <span className="seat-bus-back-label">Rear</span>
        </div>
      </div>

      {/* Legend */}
      <div className="seat-legend">
        <div className="seat-legend-item">
          <div className="seat-legend-box" style={{ background: SEAT_COLORS.available }} />
          <span>Available</span>
        </div>
        <div className="seat-legend-item">
          <div className="seat-legend-box" style={{ background: SEAT_COLORS.booked }} />
          <span>Booked</span>
        </div>
        <div className="seat-legend-item">
          <div className="seat-legend-box" style={{ background: SEAT_COLORS.selected }} />
          <span>Selected</span>
        </div>
        {womenBooking && (
          <div className="seat-legend-item">
            <div className="seat-legend-box" style={{ background: SEAT_COLORS.women }} />
            <span>Women</span>
          </div>
        )}
      </div>
    </div>
  );
}
