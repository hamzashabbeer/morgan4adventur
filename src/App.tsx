import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PainPoints } from './components/PainPoints';
import { VideoOverview } from './components/VideoOverview';
import { EarningStreams } from './components/EarningStreams';
import { AboutCoach } from './components/AboutCoach';
import { IncludedSystem } from './components/IncludedSystem';
import { StepByStep } from './components/StepByStep';
import { EnrollCTA } from './components/EnrollCTA';
import { FreeCommunity } from './components/FreeCommunity';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // High-performance IntersectionObserver reveal system for all browsers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once visible to save browser resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const targets = document.querySelectorAll('.scroll-reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
      {/* Scroll Progress Indicator Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, var(--skylt), var(--blue))',
          zIndex: 9999,
          transformOrigin: '0%',
          transform: 'scaleX(0)',
          animation: 'scroll-progress linear',
          animationTimeline: 'scroll(root)',
        }}
      />

      <main style={{ flexGrow: 1 }}>
        <Hero />
        <TrustBar />
        <PainPoints />
        <VideoOverview />
        <EarningStreams />
        <AboutCoach />
        <IncludedSystem />
        <StepByStep />
        <EnrollCTA />
        <FreeCommunity />
        <BookingSection />
      </main>
      
      <Footer />

      {/* Embedded inline styles for specific scroll progress bar keyframes */}
      <style>{`
        @keyframes scroll-progress {
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default App;
