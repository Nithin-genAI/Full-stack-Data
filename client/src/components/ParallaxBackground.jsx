import React, { useEffect, useState } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-wrapper">
      <div 
        className="parallax-layer parallax-far" 
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div 
        className="parallax-layer parallax-mid" 
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
