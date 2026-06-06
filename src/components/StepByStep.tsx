import React from 'react';

interface Step {
  id: string;
  num: string;
  title: string;
  description: string;
  isAffiliate?: boolean;
}

export const StepByStep: React.FC = () => {
  const steps: Step[] = [
    {
      id: 'step-1',
      num: '01',
      title: 'Enroll and Get Instant Access',
      description: 'Sign up for $199 and get immediate access to your full back office, booking platform, AI marketing tools, and training library from day one.'
    },
    {
      id: 'step-2',
      num: '02',
      title: 'Complete the Training',
      description: 'Follow the award winning step by step program. Learn how to book travel, market your business, and build your client base even with zero prior experience.'
    },
    {
      id: 'step-3',
      num: '03',
      title: 'Land Your First Bookings',
      description: 'Use the done for you tools and mentorship to book your first clients and start generating real commissions. Every booking brings you closer to the life you want.'
    },
    {
      id: 'step-4',
      num: '04',
      title: 'Train, Travel and Keep Scaling',
      description: 'With income that doesn\'t require clocking in, you can train for the races you want, run the trails you want, cycle the routes you want, and take the trips you want. Your business grows even when you are on the road.'
    },
    {
      id: 'step-5',
      num: '05',
      title: 'Grow Your Affiliate Income and Earn Every Month',
      description: 'Share your turnkey digital travel platform with other adventure lovers, fitness enthusiasts, and aspiring travelers. When they join using your link, you earn bonuses and residuals every single month. The more people you bring into the platform, the more your passive income compounds. This is not just a booking business. It is a vehicle for long term financial freedom built on a product everyone already loves to use.',
      isAffiliate: true
    }
  ];

  return (
    <section className="steps-section">
      <span className="eyebrow" style={{ color: 'var(--skylt)' }}>How It Works</span>
      <h2 className="section-title-light scroll-reveal">
        Start Earning From Home<br />With A Travel Business<br /><span className="hl">In Just 30 Days</span>
      </h2>
      <p className="steps-sub">THE PROVEN PLAN TO TAKE YOU FROM 9 TO 5 STUCK TO FREEDOM</p>
      
      <div className="steps-grid">
        {steps.map((step) => {
          if (step.isAffiliate) {
            return (
              <div key={step.id} className="affiliate-card step-card scroll-reveal">
                <div className="step-num">{step.num}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          }
          return (
            <div key={step.id} className="step-card scroll-reveal">
              <div className="step-num">{step.num}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
