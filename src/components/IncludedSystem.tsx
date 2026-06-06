import React from 'react';

interface IncludedItem {
  id: string;
  title: string;
  description: string;
}

export const IncludedSystem: React.FC = () => {
  const items: IncludedItem[] = [
    {
      id: 'inc-1',
      title: 'Training and Education',
      description: 'Learn through award winning training, daily live sessions, and hands on mentorship from top producing agents. All designed to help you start earning through travel with confidence. No experience needed, just curiosity and action.'
    },
    {
      id: 'inc-2',
      title: 'AI Marketing and Digital Tools',
      description: 'Get your full AI Marketing Suite to attract, follow up, and convert clients even while you sleep. Use AI generated itineraries, done for you posts, and pre written campaigns to show up like a pro from day one. Your personalized website and booking portal come ready with built in email marketing and lead tracking tools. Plus $100,000 worth of professional marketing materials to build your brand instantly.'
    },
    {
      id: 'inc-3',
      title: 'Direct Booking and Supplier Access',
      description: 'Unlock your own direct booking platform with 24/7 access to flights, resorts, cruises, tours, and travel packages. Work directly with hundreds of preferred suppliers offering exclusive perks and rewards for your clients. Earn top tier commissions and unlock bonus income opportunities with every booking. Close more sales easily with client incentives and ready to send gifts built right into your tools.'
    },
    {
      id: 'inc-4',
      title: 'Business and Tech Support',
      description: 'You run the business and we will back you up. Track all your commissions, clients, and reports in your secure back office. Get daily live tech support whenever you need help. Your business is protected with E&O insurance and IATAN certified so you can focus on growing.'
    },
    {
      id: 'inc-5',
      title: 'Exclusive Benefits and Recognition',
      description: 'Earn rewards, recognition, and once in a lifetime experiences. Get celebrated in recognition programs for high performers. Access exclusive specials, hot deals, and insider trends before anyone else including travel discounts you can use yourself.'
    },
    {
      id: 'inc-6',
      title: '1 on 1 Mentorship and Community',
      description: 'You are never doing this solo unless you want to on a trail. Get direct mentorship, weekly check ins, and a community of like minded adventure travelers keeping each other accountable and motivated.'
    }
  ];

  return (
    <section className="included-section">
      <span className="eyebrow">The Complete System</span>
      <h2 className="section-title scroll-reveal">
        Everything You Get When<br /><span className="hl">You Enroll</span>
      </h2>
      <p className="included-sub">No experience needed. Just curiosity and action. Here is exactly what is included.</p>
      
      <div className="included-grid">
        {items.map((item) => (
          <div key={item.id} className="included-item scroll-reveal">
            <div className="check-icon">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
