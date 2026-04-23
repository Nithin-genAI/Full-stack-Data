import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBus, FaTicketAlt, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import '../../styles/global.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="header-inner">
        <Link to="/" className="header-logo" id="logo-link">
          <div className="header-logo-icon">
            <FaBus />
          </div>
          <div className="header-logo-text">
            D<span>Bus</span>
          </div>
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <Link
            to="/bookings"
            className={`header-nav-link ${isActive('/bookings') ? 'active' : ''}`}
            id="nav-bookings"
          >
            <FaTicketAlt />
            <span>Bookings</span>
          </Link>
          <Link
            to="/help"
            className={`header-nav-link ${isActive('/help') ? 'active' : ''}`}
            id="nav-help"
          >
            <FaQuestionCircle />
            <span>Help</span>
          </Link>
          <Link
            to="/account"
            className={`header-nav-link ${isActive('/account') ? 'active' : ''}`}
            id="nav-account"
          >
            <FaUserCircle />
            <span>Account</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
