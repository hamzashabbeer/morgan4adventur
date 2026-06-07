import React from 'react';

export const FreeCommunity: React.FC = () => {
  return (
    <section className="community-section">
      <div className="community-box scroll-reveal">
        <h2>Still Not Sure?</h2>
        <p>Not ready to enroll just yet? That is completely okay.</p>
        <p>Here’s a quick 60 second quiz that helps you see if the travel industry might actually match your personality, goals, and interests.</p>
        <p>So if even a small part of you is curious, I’d definitely check it out. It’s a really helpful resource and gives you a better idea of what this business is actually like.</p>
        <p><strong>You can take the free quiz here:</strong></p>
        
        <div>
          <a 
            href="https://myidecide.net/SGS0QA" 
            className="btn-primary" 
            style={{ marginTop: '12px' }} 
            target="_blank"
            rel="noopener noreferrer"
          >
            TAKE THE FREE QUIZ →
          </a>
        </div>
      </div>
    </section>
  );
};
