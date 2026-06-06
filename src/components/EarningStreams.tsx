import React from 'react';

interface EarnStream {
  id: string;
  badge: string;
  title: string;
  description: string;
}

export const EarningStreams: React.FC = () => {
  const streams: EarnStream[] = [
    {
      id: 'stream-1',
      badge: 'GET PAID',
      title: 'When You Book a Trip',
      description: 'Every flight, resort, cruise, tour, or travel package you book earns you top tier commissions. The more trips you book, the more you earn.'
    },
    {
      id: 'stream-2',
      badge: 'GET PAID AGAIN',
      title: 'When You Help Others Own a Travel Business',
      description: 'Share the opportunity with other adventure lovers. When they join and succeed, you earn residual income on their bookings too.'
    },
    {
      id: 'stream-3',
      badge: 'GET PAID FOREVER',
      title: 'When You Build a Willable Business',
      description: 'You are building leverage, systems, and long term income that can be passed down to your family. Something that works while you live your life.'
    }
  ];

  return (
    <section className="streams-section">
      <span className="eyebrow">How you earn</span>
      <h2 className="section-title scroll-reveal">
        This Isn't Just Booking Trips.<br /><span className="hl">It's Building Ownership.</span>
      </h2>
      <p className="streams-sub">In the largest industry in the world. Here are three ways you get paid.</p>
      
      <div className="streams-grid">
        {streams.map((stream) => (
          <div key={stream.id} className="stream-card scroll-reveal">
            <div className="stream-badge">{stream.badge}</div>
            <div>
              <h4>{stream.title}</h4>
              <p>{stream.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="streams-body scroll-reveal">
        We already have the training, automation, and mentorship ready so you can plug in, start learning, and earn at your own pace. This is your chance to build something that doesn't depend on clocking in.
      </p>
      
      <div style={{ marginTop: '40px' }} className="scroll-reveal">
        <a href="https://www.plannetmarketing.com/en-us/MorganR" target="_blank" rel="noopener noreferrer" className="btn-primary">ENROLL NOW →</a>
      </div>
    </section>
  );
};
