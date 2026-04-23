import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OtpPage from './pages/OtpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import './styles/claymorphism.css';
import './styles/animations.css';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/seats/:busId" element={<SeatSelectionPage />} />
          <Route path="/bookings" element={<PlaceholderPage title="My Bookings" icon="🎫" />} />
          <Route path="/help" element={<PlaceholderPage title="Help & Support" icon="💬" />} />
          <Route path="/account" element={<PlaceholderPage title="My Account" icon="👤" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title, icon }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '16px',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <span style={{ fontSize: 64, opacity: 0.5 }}>{icon}</span>
      <h2 style={{ fontFamily: 'var(--font-primary)', color: 'var(--color-text-primary)' }}>{title}</h2>
      <p style={{ color: 'var(--color-text-light)', maxWidth: 400 }}>
        This page is coming soon. We're working hard to bring you the best experience.
      </p>
    </div>
  );
}

export default App;
