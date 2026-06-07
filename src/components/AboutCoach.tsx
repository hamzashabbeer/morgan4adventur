import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  value: string;
  label: string;
}

const StatCounter: React.FC<StatProps> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numericPart = value.replace(/[^0-9]/g, '');
    const number = parseInt(numericPart, 10);
    const prefix = value.match(/^[^\d]+/)?.[0] || '';
    const suffix = value.match(/[^\d]+$/)?.[0] || '';

    if (isNaN(number)) {
      setDisplayValue(value);
      return;
    }

    let isSubscribed = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1200;
          const stepTime = Math.abs(Math.floor(duration / number));
          
          const timer = setInterval(() => {
            start += 1;
            if (isSubscribed) {
              setDisplayValue(`${prefix}${start}${suffix}`);
            }
            if (start >= number) {
              clearInterval(timer);
              if (isSubscribed) {
                setDisplayValue(value);
              }
            }
          }, Math.max(stepTime, 16));
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      isSubscribed = false;
      observer.disconnect();
    };
  }, [value]);

  return (
    <div ref={elementRef} className="stat">
      <div className="stat-num">{displayValue}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export const AboutCoach: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <span className="eyebrow" style={{ color: 'var(--skylt)' }}>Meet Your Coach</span>
      <h2 className="section-title-light scroll-reveal">
        Hi, I'm <span className="hl">Morgan!</span>
      </h2>
      
      {/* Centered avatar image for high premium visual */}
      <div className="scroll-reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
        <img 
          src="https://res.cloudinary.com/dvikl5pda/image/upload/v1779562635/WhatsApp_Image_2026-05-23_at_23.25.54_b2dmbt.jpg" 
          alt="Morgan - Adventure Travel Coach" 
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid var(--skylt)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        />
      </div>

      <div className="about-body scroll-reveal">
        <p>I'm a Tampa based marathon runner, cyclist, gym fanatic, and adventure seeker who has traveled solo to over 50 countries. For more than 16 years I worked as a NIH policy analyst in infectious diseases, doing meaningful work but quietly suffocating under a salary that never stretched far enough, a PTO bank that was always empty, and a calendar that had no room for the adventures I was born to chase.</p>
        <p>I always pushed my limits on the marathon course, on a mountain trail, on a cycling route, and in gyms around the world. But I constantly felt stuck and tied down. Not enough money to travel the way I wanted. Not enough time to do it as often as I dreamed. No one to go with.</p>
        <p>Then I discovered a business model inside the travel industry that changed everything. Starting with absolutely zero sales experience, zero marketing knowledge, and zero social media presence, I grew my Instagram to 10k followers and my Facebook and TikTok to 2k each while building my way to the <strong>top 2% of the company in under a year.</strong></p>
        <p>Now I help other fitness and adventure loving solo travelers do exactly the same. Build residual income, train hard, travel often, and work less.</p>
        
        {/* Social Icons row for direct contact */}
        <div className="social-links-row">
          <a href="https://instagram.com/rutkowskimorgan" target="_blank" rel="noopener noreferrer" className="social-btn instagram" title="Instagram">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,115c-57.99,0-105,47.01-105,105s47.01,105,105,105,105-47.01,105-105-47.01-105-105-105Zm0,170c-35.84,0-65-29.16-65-65s29.16-65,65-65,65,29.16,65,65-29.16,65-65,65ZM353,109c0,12.7-10.3,23-23,23s-23-10.3-23-23,10.3-23,23-23,23,10.3,23,23ZM448,127.2v257.6c0,41.97-34.03,76-76,76H76c-41.97,0-76-34.03-76-76V127.2c0-41.97,34.03-76,76-76h296c41.97,0,76,34.03,76,76Zm-36,0c0-22.06-17.94-40-40-40H76c-22.06,0-40,17.94-40,40v257.6c0,22.06,17.94,40,40,40h296c22.06,0,40-17.94,40-40V127.2Z"></path></svg>
          </a>
          <a href="https://www.facebook.com/morgan.rutkowski.3" target="_blank" rel="noopener noreferrer" className="social-btn facebook" title="Facebook">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.43 19.12-40.43 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
          </a>
          <a href="https://api.whatsapp.com/send?phone=14074513048" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp" title="WhatsApp">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
          </a>
          <a href="tel:+14074513048" className="social-btn phone" title="Call / SMS">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256 208 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
          </a>
        </div>
      </div>


      <div className="stat-row scroll-reveal">
        <StatCounter value="50+" label="Countries Solo" />
        <StatCounter value="40+" label="Years. Collegiate Runner. Certified Trainer & Spin Instructor." />
        <StatCounter value="TOP 2%" label="of the Company" />
        <StatCounter value="10K" label="Instagram Followers" />
      </div>

      <div style={{ marginTop: '44px' }} className="scroll-reveal">
        <a href="https://www.plannetmarketing.com/en-us/MorganR" target="_blank" rel="noopener noreferrer" className="btn-primary">START YOUR JOURNEY WITH ME →</a>
      </div>
    </section>
  );
};
