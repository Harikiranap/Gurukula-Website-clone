import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Show preloader for a guaranteed minimum time to allow animations
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for the fade-out CSS transition to complete before unmounting
      setTimeout(() => {
        setIsMounted(false);
        if (onFinish) onFinish();
      }, 1000); 
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isMounted) return null;

  return (
    <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      {/* Animated Background Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {/* Glassmorphism Main Panel */}
      <div className="glass-panel">
        <div className="ring-container">
          <div className="ring ring-outer"></div>
          <div className="ring ring-middle"></div>
          <div className="ring ring-inner"></div>
          
          <div className="logo-wrapper">
            <img 
              src="/images/logo.png"
              alt="Loading..." 
              className="pulse-logo"
              onError={(e) => {
                // Fallback to logo1.png if logo.png fails
                e.target.onerror = null;
                e.target.src = '/images/logo.png';
              }} 
            />
          </div>
        </div>
        
        <div className="loading-text-container">
          <div className="loading-text">
            <span>G</span><span>U</span><span>R</span><span>U</span><span>K</span><span>U</span><span>L</span><span>A</span>
          </div>
          <div className="loading-bar-bg">
            <div className="loading-bar-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;