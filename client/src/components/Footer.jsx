import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Dbus</div>
          <p className="footer-tagline">
            Your trusted partner for safe, comfortable, and reliable bus journeys across the country.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-col-title">Company</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">About</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Careers</a>
          </div>
          
          <div className="footer-column">
            <span className="footer-col-title">Support</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Help</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Contact</a>
          </div>
          
          <div className="footer-column">
            <span className="footer-col-title">Legal</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Dbus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
