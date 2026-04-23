import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { DEPARTURE_TIME_FILTERS, BUS_TYPES, OPERATOR_TYPES, RATING_FILTERS, PRICE_RANGE } from '../../utils/constants';
import './FilterPanel.css';

export default function FilterPanel({ filters, onFilterChange, onClear, mobileOpen, onCloseMobile }) {
  const toggleArrayFilter = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  const handlePriceChange = (val) => {
    onFilterChange({ ...filters, priceRange: val });
  };

  const handleRatingChange = (val) => {
    onFilterChange({ ...filters, rating: val });
  };

  return (
    <>
      {mobileOpen && <div className="filter-overlay" onClick={onCloseMobile} />}
      <aside className={`filter-panel clay-card-inset ${mobileOpen ? 'filter-panel-open' : ''}`} id="filter-panel">
        <div className="filter-panel-header">
          <h3 className="filter-panel-title">Filters</h3>
          <div className="filter-panel-actions">
            <button className="filter-clear-btn" onClick={onClear}>Clear All</button>
            {mobileOpen && (
              <button className="filter-close-btn" onClick={onCloseMobile}><FaTimes /></button>
            )}
          </div>
        </div>

        {/* Departure Time */}
        <div className="filter-section">
          <h4 className="filter-section-title">Departure Time</h4>
          {DEPARTURE_TIME_FILTERS.map(opt => (
            <label key={opt.value} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={(filters.departureTime || []).includes(opt.value)}
                onChange={() => toggleArrayFilter('departureTime', opt.value)}
                className="filter-checkbox"
              />
              <span className="filter-checkbox-custom" />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>

        {/* Bus Type */}
        <div className="filter-section">
          <h4 className="filter-section-title">Bus Type</h4>
          {BUS_TYPES.map(opt => (
            <label key={opt.value} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={(filters.busType || []).includes(opt.value)}
                onChange={() => toggleArrayFilter('busType', opt.value)}
                className="filter-checkbox"
              />
              <span className="filter-checkbox-custom" />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>

        {/* Price Range */}
        <div className="filter-section">
          <h4 className="filter-section-title">Price Range</h4>
          <div className="filter-price-labels">
            <span>₹{(filters.priceRange || [PRICE_RANGE.min, PRICE_RANGE.max])[0]}</span>
            <span>₹{(filters.priceRange || [PRICE_RANGE.min, PRICE_RANGE.max])[1]}</span>
          </div>
          <Slider
            range
            min={PRICE_RANGE.min}
            max={PRICE_RANGE.max}
            step={50}
            value={filters.priceRange || [PRICE_RANGE.min, PRICE_RANGE.max]}
            onChange={handlePriceChange}
            trackStyle={[{ background: 'linear-gradient(90deg, #64B5F6, #FF6B9D)', height: 6 }]}
            handleStyle={[
              { background: 'white', border: '3px solid #64B5F6', width: 20, height: 20, marginTop: -7, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' },
              { background: 'white', border: '3px solid #FF6B9D', width: 20, height: 20, marginTop: -7, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' },
            ]}
            railStyle={{ background: '#E3F2FD', height: 6 }}
          />
        </div>

        {/* Operator Type */}
        <div className="filter-section">
          <h4 className="filter-section-title">Operator</h4>
          {OPERATOR_TYPES.map(opt => (
            <label key={opt.value} className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={(filters.operatorType || []).includes(opt.value)}
                onChange={() => toggleArrayFilter('operatorType', opt.value)}
                className="filter-checkbox"
              />
              <span className="filter-checkbox-custom" />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>

        {/* Rating */}
        <div className="filter-section">
          <h4 className="filter-section-title">Rating</h4>
          {RATING_FILTERS.map(opt => (
            <label key={opt.value} className="filter-radio-label">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === opt.value}
                onChange={() => handleRatingChange(opt.value)}
                className="filter-radio"
              />
              <span className="filter-radio-custom" />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </aside>
    </>
  );
}
