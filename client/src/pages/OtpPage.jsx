import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthButton from '../components/AuthButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import '../styles/auth.css';

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <ParallaxBackground>
        <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Verify OTP</h2>
        <p className="auth-links" style={{marginTop: 0, marginBottom: '24px'}}>
          Enter the 6-digit code sent to your email/phone.
        </p>
        <form className="auth-form" onSubmit={handleVerify}>
          <div className="otp-container">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-input"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  onFocus={e => e.target.select()}
                  required
                />
              );
            })}
          </div>
          <AuthButton text="Verify" type="submit" />
        </form>
        <div className="auth-links">
          Didn't receive the code? <Link to="#" onClick={(e) => e.preventDefault()} className="auth-link">Resend OTP</Link>
        </div>
      </div>
    </div>
        </ParallaxBackground>
      </main>
      <Footer />
    </>
  );
};

export default OtpPage;
