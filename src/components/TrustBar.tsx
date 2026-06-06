import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="trust-bar">
      <p>As seen in</p>
      <div className="trust-logos">
        <img src="/TravelWeekly logo.webp" alt="Travel Weekly" className="logo-weekly" />
        <img src="/TravelPlus logo .webp" alt="TravelPlus" className="logo-plus" />
        <img src="/Travel-Age-West-logo.webp" alt="Travel Age West" className="logo-west" />
        <img src="/Travolution Logo.webp" alt="Travolution" className="logo-travolution" />
      </div>
    </div>
  );
};

