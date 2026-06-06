import React, { useState, useEffect } from 'react';

export const EnrollCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 35);
  const [spotsLeft, setSpotsLeft] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);

    const spotsTimer = setInterval(() => {
      setSpotsLeft((prev) => (prev > 1 && Math.random() > 0.7 ? prev - 1 : prev));
    }, 45000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  return (
    <section className="enroll-section" id="enroll">
      <div className="enroll-box scroll-reveal">
        <span className="spots-tag">🔥 LIMITED SPOTS: ONLY {spotsLeft} LEFT THIS WEEK</span>
        <h2 className="section-title-light">
          Get <span className="hl">Instant Access</span><br />Today
        </h2>
        <p>Everything you need to launch a travel business, earn residual income, and build a life of adventure. All in one proven system. This is your chance to build something that works while you live your life.</p>
        
        <div className="enroll-price">ENROLL NOW <span>$199</span></div>
        
        {/* Ticking countdown clock */}
        <div style={{
          display: 'inline-block',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.6)',
          backgroundColor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '6px 14px',
          fontFamily: 'monospace',
          marginBottom: '24px',
        }}>
          Special pricing expires in: <span style={{ color: 'var(--skylt)', fontWeight: 'bold' }}>{formatTime(timeLeft)}</span>
        </div>

        <div className="enroll-note">One time enrollment · Instant access · No experience needed</div>
        
        <div>
          <a 
            href="https://www.plannetmarketing.com/en-us/MorganR" 
            className="btn-primary" 
            style={{ fontSize: '20px', padding: '20px 52px' }} 
            target="_blank"
            rel="noopener noreferrer"
          >
            ENROLL NOW →
          </a>
        </div>
        
        <p style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
          Questions? Watch the video overview above first.
        </p>
      </div>
    </section>
  );
};
