import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import '../styles/auth.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <ParallaxBackground>
        <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create an Account</h2>
        <form className="auth-form" onSubmit={handleRegister}>
          <InputField label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
          <InputField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" />
          <InputField label="Phone Number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 234 567 8900" />
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" />
          <InputField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
          <AuthButton text="Register" type="submit" />
        </form>
        <div className="auth-links">
          Already have an account? <Link to="/" className="auth-link">Login here</Link>
        </div>
      </div>
    </div>
        </ParallaxBackground>
      </main>
      <Footer />
    </>
  );
};

export default SignupPage;
