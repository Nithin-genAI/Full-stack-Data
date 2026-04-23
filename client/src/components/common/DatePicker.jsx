import { useState, useRef, useEffect } from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isToday, isBefore } from 'date-fns';
import '../../styles/claymorphism.css';

export default function DatePicker({ value, onChange, id }) {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderHeader = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, padding: '0 4px' }}>
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} style={navBtnStyle}>
        <FaChevronLeft size={12} />
      </button>
      <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>
        {format(currentMonth, 'MMMM yyyy')}
      </span>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} style={navBtnStyle}>
        <FaChevronRight size={12} />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
        {days.map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)', fontWeight: 600, padding: 4 }}>
            {d}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let day = startDate;

    while (day <= endDate) {
      const cells = [];
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isDisabled = isBefore(day, new Date()) && !isToday(day);
        const isSelected = value && isSameDay(day, value);
        const isCurrentMonth = isSameMonth(day, monthStart);

        cells.push(
          <div
            key={day.toString()}
            onClick={() => { if (!isDisabled && isCurrentMonth) { onChange(cloneDay); setOpen(false); } }}
            style={{
              textAlign: 'center',
              padding: '6px 2px',
              borderRadius: 'var(--radius-sm)',
              cursor: isDisabled || !isCurrentMonth ? 'default' : 'pointer',
              background: isSelected ? 'linear-gradient(135deg, #FF6B9D, #FFB4A2)' : isToday(day) ? 'var(--color-primary-100)' : 'transparent',
              color: isSelected ? 'white' : !isCurrentMonth ? 'var(--color-text-muted)' : isDisabled ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: isSelected || isToday(day) ? 600 : 400,
              transition: 'all 0.15s ease',
            }}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
          {cells}
        </div>
      );
    }
    return rows;
  };

  const quickSelect = (daysAhead) => {
    const d = addDays(new Date(), daysAhead);
    onChange(d);
    setOpen(false);
  };

  return (
    <div ref={ref} style={{ position: 'relative' }} id={id}>
      <div className="clay-input-wrapper" onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
        <span className="clay-input-icon"><FaCalendarAlt /></span>
        <div className="clay-input" style={{ cursor: 'pointer', userSelect: 'none' }}>
          {value ? format(value, 'dd MMM, yyyy') : 'Select date'}
        </div>
      </div>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          zIndex: 'var(--z-dropdown)',
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: 16,
          boxShadow: '0 12px 40px rgba(125, 179, 232, 0.25)',
          border: '1px solid rgba(125, 179, 232, 0.15)',
          minWidth: 280,
          animation: 'fadeInDown 0.2s ease-out',
        }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <button onClick={() => quickSelect(0)} style={quickBtnStyle}>Today</button>
            <button onClick={() => quickSelect(1)} style={quickBtnStyle}>Tomorrow</button>
          </div>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      )}
    </div>
  );
}

const navBtnStyle = {
  background: 'var(--color-primary-50)',
  border: 'none',
  borderRadius: 'var(--radius-sm)',
  padding: '6px 8px',
  cursor: 'pointer',
  color: 'var(--color-text-secondary)',
  display: 'flex',
  alignItems: 'center',
};

const quickBtnStyle = {
  padding: '4px 12px',
  borderRadius: 'var(--radius-full)',
  border: '1px solid var(--color-primary-200)',
  background: 'var(--color-primary-50)',
  color: 'var(--color-primary-700)',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 600,
  cursor: 'pointer',
};
