import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">Dbus</Link>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
          <span className="icon">🔑</span> Login
        </Link>
        <Link to="/signup" className={`sidebar-link ${location.pathname === '/signup' ? 'active' : ''}`}>
          <span className="icon">✍️</span> Sign Up
        </Link>
        <Link to="/forgot-password" className={`sidebar-link ${location.pathname === '/forgot-password' ? 'active' : ''}`}>
          <span className="icon">❓</span> Help
        </Link>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <span className="user-name">Guest User</span>
            <span className="user-role">Not logged in</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
