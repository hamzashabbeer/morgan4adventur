import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="logo-badge animate-fade-up">Morgan 4 Adventure Travel</div>
      <h1 className="animate-fade-up delay-100">
        Train Hard.
        <span className="hl-blue">Travel Often.</span>
        Work <span className="hl-white">Less.</span>
      </h1>
      <p className="hero-sub animate-fade-up delay-200">
        The proven travel business plan built for solo adventure travelers who want financial freedom, time freedom, and a life they never need a vacation from.
      </p>
      <div className="hero-tagline animate-fade-up delay-300">
        ✈️ If your brain is screaming, <em>"OMG this is me!"</em> your thumb knows what to do…
      </div>
      <div className="btn-group animate-fade-up delay-400">
        <a href="#watch" className="btn-primary">WATCH THE OVERVIEW ▶</a>
        <a href="https://www.plannetmarketing.com/en-us/MorganR" target="_blank" rel="noopener noreferrer" className="btn-outline">ENROLL NOW →</a>
      </div>
    </section>
  );
};
