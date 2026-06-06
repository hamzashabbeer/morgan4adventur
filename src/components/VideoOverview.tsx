import React, { useState } from 'react';

export const VideoOverview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <section className="video-section" id="watch">
      <span className="eyebrow" style={{ color: 'var(--skylt)' }}>See It In Action</span>
      <h2 className="section-title-light scroll-reveal">
        Turn Your Love of <span className="hl">Travel</span><br />Into <span className="hl">Income</span>
      </h2>
      <p>Watch this quick overview to see exactly how the travel and affiliate business model works and decide if it's the right fit for your life and goals.</p>
      
      <div className="video-placeholder scroll-reveal" onClick={() => setIsPlaying(true)}>
        <div className="video-thumb">
          <div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: 'url("https://res.cloudinary.com/dvikl5pda/video/upload/v1779209327/WhatsApp_Video_2026-05-19_at_17.09.39_epbyzh.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.9,
              pointerEvents: 'none'
            }} 
          />
          <div className="play-btn">
            <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </div>
        <div className="video-caption">▶ &nbsp; AN IMPORTANT MESSAGE FROM MORGAN — Watch Before You Enroll</div>
      </div>
      
      <p className="video-note">Quick overview · No fluff · Real results</p>
      
      <div style={{ marginTop: '36px' }} className="scroll-reveal">
        <a href="https://www.plannetmarketing.com/en-us/MorganR" target="_blank" rel="noopener noreferrer" className="btn-primary">READY TO ENROLL? →</a>
      </div>

      {/* Modal Video Player Lightbox */}
      {isPlaying && (
        <div 
          onClick={() => setIsPlaying(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '24px',
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              backgroundColor: 'var(--charcoal)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Modal Header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', letterSpacing: '1px', color: 'var(--white)' }}>Overview Presentation</span>
              <button 
                onClick={() => setIsPlaying(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >✕</button>
            </div>
            {/* Aspect container */}
            <div style={{ width: '100%', backgroundColor: '#000', position: 'relative' }}>
              <video
                src="https://res.cloudinary.com/dvikl5pda/video/upload/v1779209327/WhatsApp_Video_2026-05-19_at_17.09.39_epbyzh.mp4"
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
