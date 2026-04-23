import React from 'react';

const AuthButton = ({ text, type = 'button', onClick }) => {
  return (
    <button className="auth-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default AuthButton;
