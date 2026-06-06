import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--black)] py-12 px-6 text-center border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Social Icons row */}
        <div className="social-links-row" style={{ marginBottom: '12px' }}>
          <a href="https://instagram.com/rutkowskimorgan" target="_blank" rel="noopener noreferrer" className="social-btn instagram" title="Instagram">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,115c-57.99,0-105,47.01-105,105s47.01,105,105,105,105-47.01,105-105-47.01-105-105-105Zm0,170c-35.84,0-65-29.16-65-65s29.16-65,65-65,65,29.16,65,65-29.16,65-65,65ZM353,109c0,12.7-10.3,23-23,23s-23-10.3-23-23,10.3-23,23-23,23,10.3,23,23ZM448,127.2v257.6c0,41.97-34.03,76-76,76H76c-41.97,0-76-34.03-76-76V127.2c0-41.97,34.03-76,76-76h296c41.97,0,76,34.03,76,76Zm-36,0c0-22.06-17.94-40-40-40H76c-22.06,0-40,17.94-40,40v257.6c0,22.06,17.94,40,40,40h296c22.06,0,40-17.94,40-40V127.2Z"></path></svg>
          </a>
          <a href="https://www.facebook.com/morganrutkowski" target="_blank" rel="noopener noreferrer" className="social-btn facebook" title="Facebook">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.43 19.12-40.43 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
          </a>
          <a href="https://api.whatsapp.com/send?phone=14074513048" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp" title="WhatsApp">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
          </a>
          <a href="tel:+14074513048" className="social-btn phone" title="Call / SMS">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256 208 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
          </a>
        </div>

        {/* Brand signature */}
        <div className="font-display text-lg tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
          Morgan 4 Adventure Travel
        </div>
        
        <p className="text-xs text-[rgba(255,255,255,0.35)] tracking-widest font-light">
          © {currentYear} Morgan 4 Adventure Travel • Tampa, FL • All Rights Reserved
        </p>
        
        {/* Disclaimer/Disclosure standard policy */}
        <p className="text-[10px] text-[rgba(255,255,255,0.2)] max-w-xl mx-auto mt-4 leading-normal font-light">
          Disclaimer: Results represent unique experiences and accomplishments. Individual earnings and success depend on effort, dedication, and marketing expertise.
        </p>
      </div>
    </footer>
  );
};
