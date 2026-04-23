import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import '../styles/auth.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <ParallaxBackground>
        <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Forgot Password</h2>
        {success && (
          <div className="success-message">
            Reset link sent to <strong>{email}</strong>. Redirecting to reset page...
          </div>
        )}
        <form className="auth-form" onSubmit={handleReset}>
          <InputField 
            label="Email Address" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your registered email" 
          />
          <AuthButton text="Send Reset Link" type="submit" />
        </form>
        <div className="auth-links">
          Remember your password? <Link to="/" className="auth-link">Back to Login</Link>
        </div>
      </div>
    </div>
        </ParallaxBackground>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
