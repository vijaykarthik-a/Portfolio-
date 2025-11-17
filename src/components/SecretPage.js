import React, { useEffect } from 'react';
import './SecretPage.css';

function SecretPage({ onClose }) {
  useEffect(() => {
    // Prevent scrolling on the body when secret page is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="secret-page-fullscreen">
      <button className="close-btn" onClick={onClose}>✕</button>
      
      <div className="secret-page-wrapper">
        <div className="secret-header">
          <h1 className="secret-title">🔓 Secret Unlocked!</h1>
          <p className="secret-subtitle">You found the hidden page! (Clicked 5 times)</p>
        </div>
        
        <div className="secret-body">
          <div className="secret-card">
            <div className="secret-icon">🎯</div>
            <h3>Easter Egg Achievement</h3>
            <p>Congratulations! You're curious enough to click on my name 5 times. That's the kind of attention to detail I bring to every project.</p>
          </div>

          <div className="secret-card">
            <div className="secret-icon">💡</div>
            <h3>Fun Fact</h3>
            <p>I believe the best engineers are those who explore beyond the obvious. This hidden page is a testament to that philosophy.</p>
          </div>

          <div className="secret-card">
            <div className="secret-icon">🚀</div>
            <h3>Special Message</h3>
            <p>Thanks for taking the time to explore my portfolio. If you're reading this, you might be the kind of person I'd love to work with!</p>
          </div>

          <div className="secret-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours Coding</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Curiosity Level</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Clicks to Unlock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretPage;
