import React from 'react';
import './SpiderIntro.css';

function SpiderIntro() {
  return (
    <div className="spider-intro">
      <div className="intro-content">
        <div className="spider-eyes">
          <div className="eye left-eye">
            <div className="eye-border"></div>
            <div className="eye-inner">
              <div className="eye-highlight"></div>
            </div>
          </div>
          <div className="eye right-eye">
            <div className="eye-border"></div>
            <div className="eye-inner">
              <div className="eye-highlight"></div>
            </div>
          </div>
        </div>
        <div className="intro-text">
          <h1 className="intro-name">VIJAY KARTHIK</h1>
          <p className="intro-tagline">Welcome to my portfolio</p>
        </div>
      </div>
    </div>
  );
}

export default SpiderIntro;