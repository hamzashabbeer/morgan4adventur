import React from 'react';

export const BookingSection: React.FC = () => {
  return (
    <section className="booking-section">
      <span className="eyebrow" style={{ color: 'var(--skylt)' }}>Already love to travel?</span>
      <h2 className="section-title-light scroll-reveal">
        Need Help <span className="hl">Booking</span><br />A Trip?
      </h2>
      <p>Whether you are planning a solo trail run expedition, a bucket list international adventure, a cycling trip, or a fitness retreat, I can help you plan and book it all.</p>
      
      <div className="scroll-reveal" style={{ marginTop: '24px' }}>
        <a 
          href="https://www.plannetmarketing.com/en-us/MorganR" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          BOOK YOUR ADVENTURE →
        </a>
      </div>
      
      <div>
        <a 
          href="https://linktr.ee/Morgan4AdventureTravel" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="domain-pill"
          style={{ textDecoration: 'none' }}
        >
          linktr.ee/Morgan4AdventureTravel
        </a>
      </div>
    </section>
  );
};
