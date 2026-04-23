import { FaEdit, FaBus } from 'react-icons/fa';
import { format } from 'date-fns';
import Button from '../common/Button';
import './SearchHeader.css';

export default function SearchHeader({ from, to, date, busCount, onModify }) {
  return (
    <div className="search-header clay-card" id="search-header">
      <div className="search-header-route">
        <span className="search-header-city">{from}</span>
        <span className="search-header-arrow">
          <FaBus className="search-header-bus-icon" />
          <span className="search-header-line" />
        </span>
        <span className="search-header-city">{to}</span>
        <span className="search-header-divider">|</span>
        <span className="search-header-date">{date ? format(new Date(date), 'dd MMM, yyyy') : ''}</span>
      </div>
      <div className="search-header-meta">
        <span className="search-header-count">{busCount} buses found</span>
        <Button variant="outline" size="small" onClick={onModify} id="modify-search-btn">
          <FaEdit /> Modify
        </Button>
      </div>
    </div>
  );
}
