import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import '../styles/auth.css';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
        <h2 className="auth-title">Create New Password</h2>
        <form className="auth-form" onSubmit={handleReset}>
          <InputField 
            label="New Password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter new password" 
          />
          <InputField 
            label="Confirm New Password" 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm new password" 
          />
          <AuthButton text="Reset Password" type="submit" />
        </form>
        <div className="auth-links">
          Back to <Link to="/" className="auth-link">Login</Link>
        </div>
      </div>
    </div>
        </ParallaxBackground>
      </main>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
