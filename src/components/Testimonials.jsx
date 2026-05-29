const reviews = [
  { name: 'Sarah Johnson', role: 'CEO', company: 'TechStart Inc.', rating: 5, initials: 'SJ', color: '#3b82f6',
    text: 'MASH Tech transformed our online presence completely. The website they built exceeded all our expectations — beautiful, fast, and our conversions went up 3x!' },
  { name: 'Michael Chen', role: 'Founder', company: 'GrowthLab', rating: 5, initials: 'MC', color: '#8b5cf6',
    text: 'Working with MASH Tech was a fantastic experience. Their team is professional, communicative, and delivered our mobile app on time with excellent quality.' },
  { name: 'Aisha Rahman', role: 'Marketing Director', company: 'Nova Brands', rating: 5, initials: 'AR', color: '#ec4899',
    text: 'Outstanding service! They understood our vision perfectly and delivered a web solution that truly represents our brand. Highly recommended!' },
  { name: 'David Park', role: 'CTO', company: 'DataFlow', rating: 5, initials: 'DP', color: '#10b981',
    text: 'The SaaS dashboard they built is incredible. Clean code, great performance, and they were proactive in suggesting improvements throughout the project.' },
  { name: 'Fatima Al-Sayed', role: 'Operations Manager', company: 'LogiTech', rating: 5, initials: 'FA', color: '#f59e0b',
    text: 'We needed a complete e-commerce overhaul and MASH Tech delivered beyond expectations. The new platform is smooth, intuitive, and our sales have grown.' },
  { name: 'James Williams', role: 'Product Manager', company: 'AppForge', rating: 5, initials: 'JW', color: '#06b6d4',
    text: 'Exceptional app development team. They handled complex requirements with ease and maintained clear communication throughout. Will definitely work with them again.' },
  { name: 'Elena Rodriguez', role: 'Director of Marketing', company: 'Nexus Retail', rating: 5, initials: 'ER', color: '#8b5cf6',
    text: 'Our new e-commerce site is stunning and lightning fast. MASH Tech delivered exactly what they promised and their post-launch support has been fantastic.' },
  { name: 'William Chen', role: 'CEO', company: 'CloudSync', rating: 5, initials: 'WC', color: '#f43f5e',
    text: 'The UI/UX revamp they did for our SaaS product increased user engagement by 40%. The team is highly skilled and very responsive.' },
  { name: 'Sophia Patel', role: 'Operations Lead', company: 'FinTech Solutions', rating: 5, initials: 'SP', color: '#10b981',
    text: 'Highly professional and technically proficient. They built a secure, scalable backend for our financial application that works flawlessly.' },
];

import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
  );
}

export default function Testimonials({ minimal = false }) {
  const displayReviews = minimal ? reviews.slice(0, 6) : reviews;

  return (
    <section id="testimonials" className="section-alt" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background glowing blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Client Reviews</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginTop: 12, lineHeight: 1.2 }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.25rem', maxWidth: 600, margin: '1.25rem auto 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Don't just take our word for it. Here's what our amazing partners have to say about working with MASH Tech Ltd.
          </p>
        </div>

        {/* Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {displayReviews.map((r, i) => (
            <div 
              key={i} 
              style={{
                background: 'var(--card-bg)',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid var(--input-border)',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${r.color}15`;
                e.currentTarget.style.borderColor = `${r.color}50`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = 'var(--input-border)';
              }}
            >
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1 }}>
                <Quote size={60} color={r.color} />
              </div>

              <div>
                <Stars count={r.rating} />
                <p style={{ 
                  color: 'var(--text-primary)', 
                  lineHeight: 1.8, 
                  fontSize: '1.05rem', 
                  marginBottom: '2rem', 
                  fontStyle: 'italic',
                  fontWeight: 500,
                  position: 'relative',
                  zIndex: 1
                }}>
                  "{r.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--input-border)', paddingTop: '1.5rem' }}>
                <div style={{
                  width: 50, height: 50, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${r.color}, ${r.color}aa)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', fontWeight: 800, fontSize: '1.2rem',
                  boxShadow: `0 8px 16px ${r.color}40`, flexShrink: 0
                }}>
                  {r.initials}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>{r.name}</p>
                  <p style={{ color: r.color, fontSize: '0.85rem', fontWeight: 600, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {r.role} <span style={{ color: 'var(--text-secondary)' }}>at</span> {r.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {minimal && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/testimonials" className="btn-primary" style={{ textDecoration: 'none' }}>
              See All Client Reviews
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
