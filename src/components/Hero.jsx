import { ArrowRight, Play } from 'lucide-react';

const benefits = [
  { icon: '🎯', title: 'Branding Solutions', sub: 'Build your identity' },
  { icon: '💡', title: 'Gain Wisdom', sub: 'Expert guidance' },
  { icon: '⭐', title: 'More Professional', sub: 'Premium quality' },
  { icon: '🚀', title: 'Fast Delivery', sub: 'On-time results' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg"
      style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 40, position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: 120, right: '5%', width: 500, height: 500,
        borderRadius: '50%', border: '1px solid rgba(59,130,246,.1)',
        pointerEvents: 'none'
      }} className="spin-slow" />
      <div style={{
        position: 'absolute', top: 170, right: '8%', width: 380, height: 380,
        borderRadius: '50%', border: '1px solid rgba(139,92,246,.1)',
        pointerEvents: 'none', animation: 'spin-slow 18s linear infinite reverse'
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span className="section-chip">✦ MASH Tech Ltd — Your Digital Partner</span>
        </div>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          {/* Left */}
          <div className="fade-up">
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Smart Choices<br />
              <span className="gradient-text">For Your Business</span><br />
              Growth
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 480 }}>
              We help businesses grow and succeed in the digital age. From stunning websites
              to powerful mobile apps — we deliver solutions that exceed expectations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-outline" style={{ textDecoration: 'none' }}>
                <Play size={16} /> View Work
              </a>
            </div>
          </div>

          {/* Right – hero image */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <img
              src="/hero.png"
              alt="Digital business solutions"
              className="float-anim"
              style={{ width: '100%', maxWidth: 520, objectFit: 'contain', filter: 'drop-shadow(0 30px 60px rgba(59,130,246,.35))' }}
            />
          </div>
        </div>

        {/* Benefit cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <span style={{ fontSize: '1.75rem' }}>{b.icon}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '.95rem', marginBottom: 2 }}>{b.title}</p>
                <p style={{ color: '#64748b', fontSize: '.8rem' }}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
