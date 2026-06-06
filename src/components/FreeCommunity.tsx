import React from 'react';

export const FreeCommunity: React.FC = () => {
  return (
    <section className="community-section">
      <div className="community-box scroll-reveal">
        <h2>Still Not Sure?</h2>
        <p>Not ready to enroll just yet? That is completely okay.</p>
        <p>Join my <strong>FREE Community</strong> where adventure travelers, runners, cyclists, and fitness lovers share tips, wins, and real strategies for building income while living the life they love.</p>
        <p>We celebrate each other's miles on the trail and in the business. Come see what is possible before you commit.</p>
        <p><strong>Click below to join the community.</strong></p>
        
        <div>
          <a 
            href="https://www.earnintravel.com" 
            className="btn-primary" 
            style={{ marginTop: '12px' }} 
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN THE FREE COMMUNITY →
          </a>
        </div>
      </div>
    </section>
  );
};
