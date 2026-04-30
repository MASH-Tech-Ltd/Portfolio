import { useState } from 'react';
import { ExternalLink, ShoppingCart, Activity, PieChart, Utensils, Bike, Palette, X } from 'lucide-react';

const categories = ['All', 'Website', 'Mobile', 'UI/UX'];

const projects = [
  { 
    title: 'E-Commerce Platform', cat: 'Website', color: '#3b82f6', icon: <ShoppingCart size={64} strokeWidth={1.5} />, 
    desc: 'Full-stack e-commerce with admin dashboard, payments & inventory.',
    techs: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Redux'],
    features: ['Real-time inventory sync', 'Secure payment gateway', 'Admin analytics dashboard']
  },
  { 
    title: 'Fitness Tracker App', cat: 'Mobile', color: '#8b5cf6', icon: <Activity size={64} strokeWidth={1.5} />, 
    desc: 'iOS & Android health tracking app with real-time analytics.',
    techs: ['Flutter', 'Firebase', 'GraphQL', 'Swift'],
    features: ['Live workout tracking', 'Social sharing', 'HealthKit integration']
  },
  { 
    title: 'SaaS Dashboard', cat: 'UI/UX', color: '#06b6d4', icon: <PieChart size={64} strokeWidth={1.5} />, 
    desc: 'Data-rich analytics dashboard with interactive charts.',
    techs: ['Figma', 'Tailwind CSS', 'Recharts', 'Next.js'],
    features: ['Custom chart components', 'Dark/Light mode', 'Responsive layout']
  },
  { 
    title: 'Restaurant Website', cat: 'Website', color: '#f59e0b', icon: <Utensils size={64} strokeWidth={1.5} />, 
    desc: 'Modern restaurant site with online booking & menu.',
    techs: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    features: ['Table reservation system', 'Dynamic menu updates', 'SEO optimized']
  },
  { 
    title: 'Food Delivery App', cat: 'Mobile', color: '#10b981', icon: <Bike size={64} strokeWidth={1.5} />, 
    desc: 'Real-time food delivery app with live order tracking.',
    techs: ['React Native', 'Google Maps API', 'Socket.io', 'Express'],
    features: ['Live driver tracking', 'Push notifications', 'Multi-cart checkout']
  },
  { 
    title: 'Portfolio Design System', cat: 'UI/UX', color: '#ec4899', icon: <Palette size={64} strokeWidth={1.5} />, 
    desc: 'Complete design system with components and guidelines.',
    techs: ['Figma', 'Storybook', 'Framer Motion', 'Radix UI'],
    features: ['Reusable component library', 'Accessibility compliant', 'Animation tokens']
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="projects" className="section-alt" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Portfolio</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            Our Projects Have <span className="gradient-text">Been Done</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem' }}>
            A selection of work we're proud of. More coming from backend soon.
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map(c => (
            <button key={c} className={`filter-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem' }}>
          {filtered.map((p, i) => (
            <div key={i} className="project-card" onClick={() => setSelected(p)}>
              {/* Placeholder image area */}
              <div style={{
                height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `linear-gradient(135deg,${p.color}22,${p.color}08)`,
                position: 'relative', overflow: 'hidden'
              }}>
                <span style={{ color: p.color, filter: `drop-shadow(0 8px 16px ${p.color}80)`, display: 'flex' }}>{p.icon}</span>
                <div style={{
                  position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
                  background: `radial-gradient(circle at 30% 70%,${p.color}18,transparent 70%)`
                }} />
              </div>
              {/* Body */}
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{p.title}</h3>
                  <ExternalLink size={15} color="#475569" style={{ flexShrink: 0, marginLeft: 8 }} />
                </div>
                <span style={{
                  display: 'inline-block', background: `${p.color}22`, color: p.color,
                  fontSize: '.7rem', fontWeight: 700, letterSpacing: '.07em',
                  textTransform: 'uppercase', padding: '.2rem .65rem', borderRadius: 50, marginBottom: '.6rem'
                }}>{p.cat}</span>
                <p style={{ color: '#64748b', fontSize: '.825rem', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(6,8,24,0.85)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem', animation: 'modalFadeIn 0.3s ease'
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: '#0a0f25', border: `1px solid ${selected.color}40`,
              borderRadius: 20, width: '100%', maxWidth: 700, padding: '2.5rem',
              position: 'relative', boxShadow: `0 20px 40px ${selected.color}20`,
              animation: 'modalSlideUp 0.4s ease'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.05)',
                border: 'none', borderRadius: '50%', width: 36, height: 36,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: 16, background: `linear-gradient(135deg, ${selected.color}20, ${selected.color}05)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: selected.color
                  }}>
                    <div style={{ transform: 'scale(0.8)' }}>{selected.icon}</div>
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block', background: `${selected.color}22`, color: selected.color,
                      fontSize: '.7rem', fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase',
                      padding: '.2rem .65rem', borderRadius: 50, marginBottom: '.5rem'
                    }}>{selected.cat}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selected.title}</h3>
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {selected.desc}
                  <br/><br/>
                  This project demonstrates our expertise in building high-quality, scalable solutions tailored to client needs.
                </p>

                <a href="#" onClick={e => e.preventDefault()} className="btn-primary" style={{ background: selected.color, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                  View Live Project <ExternalLink size={18} />
                </a>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>Technologies Used</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {selected.techs.map((t, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 50, fontSize: '0.8rem', color: '#e2e8f0' }}>{t}</span>
                  ))}
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>Key Features</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {selected.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: selected.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
