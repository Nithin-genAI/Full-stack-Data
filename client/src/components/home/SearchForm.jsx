import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaExchangeAlt, FaFemale } from 'react-icons/fa';
import DatePicker from '../common/DatePicker';
import Toggle from '../common/Toggle';
import Button from '../common/Button';
import { cities } from '../../utils/mockData';
import './SearchForm.css';

export default function SearchForm({ initialFrom, initialTo, initialDate, onSearch }) {
  const [from, setFrom] = useState(initialFrom || '');
  const [to, setTo] = useState(initialTo || '');
  const [date, setDate] = useState(initialDate || new Date());
  const [womenBooking, setWomenBooking] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) setShowFromDropdown(false);
      if (toRef.current && !toRef.current.contains(e.target)) setShowToDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filterCities = (query) => {
    if (!query) return cities.slice(0, 8);
    return cities.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.state.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  };

  const handleFromChange = (e) => {
    const val = e.target.value;
    setFrom(val);
    setFromSuggestions(filterCities(val));
    setShowFromDropdown(true);
  };

  const handleToChange = (e) => {
    const val = e.target.value;
    setTo(val);
    setToSuggestions(filterCities(val));
    setShowToDropdown(true);
  };

  const selectCity = (city, field) => {
    if (field === 'from') {
      setFrom(city.name);
      setShowFromDropdown(false);
    } else {
      setTo(city.name);
      setShowToDropdown(false);
    }
  };

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to) return;
    if (onSearch) {
      onSearch({ from, to, date, womenBooking });
    } else {
      navigate(`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date.toISOString()}`);
    }
  };

  return (
    <form className="search-form clay-card" onSubmit={handleSearch} id="search-form">
      <div className="search-form-fields">
        {/* From */}
        <div className="search-field" ref={fromRef}>
          <div className="clay-input-wrapper" onClick={() => { setShowFromDropdown(true); setFromSuggestions(filterCities(from)); }}>
            <span className="clay-input-icon"><FaMapMarkerAlt /></span>
            <input
              className="clay-input"
              placeholder="From"
              value={from}
              onChange={handleFromChange}
              onFocus={() => { setShowFromDropdown(true); setFromSuggestions(filterCities(from)); }}
              id="search-from"
              autoComplete="off"
            />
          </div>
          {showFromDropdown && fromSuggestions.length > 0 && (
            <div className="search-dropdown">
              {fromSuggestions.map(c => (
                <div key={c.id} className="search-dropdown-item" onClick={() => selectCity(c, 'from')}>
                  <FaMapMarkerAlt className="search-dropdown-icon" />
                  <div>
                    <div className="search-dropdown-name">{c.name}</div>
                    <div className="search-dropdown-state">{c.state}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Swap Button */}
        <button type="button" className="search-swap-btn" onClick={swapCities} id="swap-cities" aria-label="Swap cities">
          <FaExchangeAlt />
        </button>

        {/* To */}
        <div className="search-field" ref={toRef}>
          <div className="clay-input-wrapper" onClick={() => { setShowToDropdown(true); setToSuggestions(filterCities(to)); }}>
            <span className="clay-input-icon" style={{ color: 'var(--color-accent-400)' }}><FaMapMarkerAlt /></span>
            <input
              className="clay-input"
              placeholder="To"
              value={to}
              onChange={handleToChange}
              onFocus={() => { setShowToDropdown(true); setToSuggestions(filterCities(to)); }}
              id="search-to"
              autoComplete="off"
            />
          </div>
          {showToDropdown && toSuggestions.length > 0 && (
            <div className="search-dropdown">
              {toSuggestions.map(c => (
                <div key={c.id} className="search-dropdown-item" onClick={() => selectCity(c, 'to')}>
                  <FaMapMarkerAlt className="search-dropdown-icon" />
                  <div>
                    <div className="search-dropdown-name">{c.name}</div>
                    <div className="search-dropdown-state">{c.state}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date */}
        <div className="search-field">
          <DatePicker value={date} onChange={setDate} id="search-date" />
        </div>

        {/* Women Booking */}
        <div className="search-field search-field-toggle">
          <FaFemale style={{ color: 'var(--color-accent-400)', fontSize: 18 }} />
          <Toggle checked={womenBooking} onChange={setWomenBooking} label="Women booking" id="women-booking-toggle" />
        </div>
      </div>

      <Button variant="primary" size="large" fullWidth type="submit" id="search-submit">
        <FaSearch /> Search Buses
      </Button>
    </form>
  );
}
