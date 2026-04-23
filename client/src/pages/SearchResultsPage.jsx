import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import SearchHeader from '../components/search/SearchHeader';
import BusListCard from '../components/search/BusListCard';
import FilterPanel from '../components/search/FilterPanel';
import Button from '../components/common/Button';
import { searchBuses } from '../utils/mockData';
import { PRICE_RANGE } from '../utils/constants';
import './SearchResultsPage.css';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const date = searchParams.get('date') || new Date().toISOString();

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    departureTime: [],
    busType: [],
    priceRange: [PRICE_RANGE.min, PRICE_RANGE.max],
    operatorType: [],
    rating: 0,
  });

  const fetchBuses = useCallback(async () => {
    setLoading(true);
    const results = await searchBuses(from, to, date, filters);
    setBuses(results);
    setLoading(false);
  }, [from, to, date, filters]);

  useEffect(() => {
    if (from && to) fetchBuses();
  }, [from, to, fetchBuses]);

  const handleClearFilters = () => {
    setFilters({
      departureTime: [],
      busType: [],
      priceRange: [PRICE_RANGE.min, PRICE_RANGE.max],
      operatorType: [],
      rating: 0,
    });
  };

  const handleModify = () => navigate('/');

  return (
    <div className="search-results-page" id="search-results-page">
      <div className="container">
        <SearchHeader
          from={from}
          to={to}
          date={date}
          busCount={buses.length}
          onModify={handleModify}
        />

        <div className="search-results-layout">
          <div className="search-results-list">
            {/* Mobile filter button */}
            <div className="mobile-filter-btn-wrap">
              <Button
                variant="secondary"
                size="small"
                onClick={() => setMobileFiltersOpen(true)}
                id="mobile-filter-btn"
              >
                <FaFilter /> Filters
              </Button>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner" />
                <span className="loading-text">Finding the best buses for you...</span>
              </div>
            ) : buses.length > 0 ? (
              buses.map((bus, idx) => (
                <div key={bus.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <BusListCard bus={bus} />
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🚌</div>
                <h3>No buses found</h3>
                <p>Try changing your search criteria or adjusting filters</p>
                <Button variant="primary" onClick={handleModify}>Modify Search</Button>
              </div>
            )}
          </div>

          <FilterPanel
            filters={filters}
            onFilterChange={setFilters}
            onClear={handleClearFilters}
            mobileOpen={mobileFiltersOpen}
            onCloseMobile={() => setMobileFiltersOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
