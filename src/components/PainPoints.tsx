import React from 'react';

interface PainPoint {
  id: string;
  text: string;
  highlight: string;
}

export const PainPoints: React.FC = () => {
  const points: PainPoint[] = [
    {
      id: 'pain-1',
      text: 'You love to travel, but every trip feels like ',
      highlight: 'money going out, not coming in.'
    },
    {
      id: 'pain-2',
      text: 'You know you need ',
      highlight: 'more streams of income but don\'t want to start from scratch.'
    },
    {
      id: 'pain-3',
      text: 'You\'re chained to a 9 to 5 that leaves no time to train the way you want or ',
      highlight: 'travel as often as you dream.'
    },
    {
      id: 'pain-4',
      text: 'You want to ',
      highlight: 'get paid while you sleep, so you can book the next adventure without asking anyone\'s permission.'
    },
    {
      id: 'pain-5',
      text: 'You want to ',
      highlight: 'travel more and travel better without burning through savings every single trip.'
    }
  ];

  return (
    <section className="pain-section">
      <div style={{ textAlign: 'center' }}>
        <span className="eyebrow">Does this sound like you?</span>
        <h2 className="section-title scroll-reveal">
          Oh Hey!<br /><span className="hl">Solo Adventurers…</span>
        </h2>
        <p className="pain-lead">HAVE YOU BEEN STRUGGLING WITH THESE PROBLEMS?</p>
      </div>

      <div className="pain-grid">
        {points.map((point) => (
          <div key={point.id} className="pain-card scroll-reveal">
            <div className="pain-x">✕</div>
            <p>
              {point.text}
              <span>{point.highlight}</span>
            </p>
          </div>
        ))}
      </div>

      <p className="pain-closer scroll-reveal">If this is you, you are on the right page. Keep reading.</p>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }} className="scroll-reveal">
        <a href="#watch" className="btn-primary">WATCH THE OVERVIEW ▶</a>
      </div>
    </section>
  );
};
