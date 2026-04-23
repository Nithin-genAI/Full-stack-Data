import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="app-header">
      <a href="#" onClick={(e) => e.preventDefault()} className="header-logo">
        Dbus
      </a>
      
      <nav className={`header-nav ${isMobileOpen ? 'mobile-open' : ''}`}>
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Home</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">About</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Contact</a>
      </nav>

      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
