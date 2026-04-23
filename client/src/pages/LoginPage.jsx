import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import '../styles/auth.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <ParallaxBackground>
        <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Dbus Login</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <InputField 
            label="Email Address" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
          <InputField 
            label="Password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
          />
          <AuthButton text="Login" type="submit" />
        </form>
        <div className="auth-links">
          <Link to="/forgot-password" className="auth-link">Forgot Password?</Link> | 
          <Link to="/signup" className="auth-link"> Sign Up</Link>
        </div>
      </div>
    </div>
        </ParallaxBackground>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
