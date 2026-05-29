import { useState } from 'react';
import { ExternalLink, ShoppingCart, Activity, PieChart, Utensils, Bike, Palette, X } from 'lucide-react';

const categories = ['All', 'Website', 'Mobile', 'UI/UX'];

const projects = [
  { 
    title: 'E-Commerce Platform', cat: 'Website', color: '#3b82f6', icon: <ShoppingCart size={64} strokeWidth={1.5} />, 
    desc: 'Full-stack e-commerce with admin dashboard, payments & inventory.',
    longDesc: 'A comprehensive digital storefront designed to handle thousands of concurrent users. It features an advanced admin dashboard for real-time inventory management and sales analytics.',
    client: 'RetailNova Group',
    duration: '4 Months',
    role: 'Full-stack Development, UI/UX',
    results: ['200% increase in mobile sales', 'Sub-second page load times', 'Automated inventory sync'],
    techs: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Redux'],
    features: ['Real-time inventory sync', 'Secure payment gateway', 'Admin analytics dashboard']
  },
  { 
    title: 'Fitness Tracker App', cat: 'Mobile', color: '#8b5cf6', icon: <Activity size={64} strokeWidth={1.5} />, 
    desc: 'iOS & Android health tracking app with real-time analytics.',
    longDesc: 'A cross-platform mobile application that gamifies personal fitness. Users can track workouts in real-time, share achievements socially, and sync data seamlessly with Apple HealthKit and Google Fit.',
    client: 'FitLife Inc.',
    duration: '6 Months',
    role: 'Mobile App Development',
    results: ['50k+ active daily users', '4.8 star App Store rating', 'Featured by Apple in Health & Fitness'],
    techs: ['Flutter', 'Firebase', 'GraphQL', 'Swift'],
    features: ['Live workout tracking', 'Social sharing', 'HealthKit integration']
  },
  { 
    title: 'SaaS Dashboard', cat: 'UI/UX', color: '#06b6d4', icon: <PieChart size={64} strokeWidth={1.5} />, 
    desc: 'Data-rich analytics dashboard with interactive charts.',
    longDesc: 'A fully responsive and highly accessible B2B SaaS dashboard. It transforms complex datasets into intuitive, interactive visual charts, allowing business leaders to make data-driven decisions at a glance.',
    client: 'DataFlow Systems',
    duration: '3 Months',
    role: 'UI/UX Design, Frontend Eng.',
    results: ['Reduced user onboarding time by 40%', 'Accessible WCAG AA compliant', 'Zero-layout-shift rendering'],
    techs: ['Figma', 'Tailwind CSS', 'Recharts', 'Next.js'],
    features: ['Custom chart components', 'Dark/Light mode', 'Responsive layout']
  },
  { 
    title: 'Restaurant Website', cat: 'Website', color: '#f59e0b', icon: <Utensils size={64} strokeWidth={1.5} />, 
    desc: 'Modern restaurant site with online booking & menu.',
    longDesc: 'A visually stunning web presence for a high-end restaurant. It includes a dynamic menu management system, seamless table reservations, and an SEO-optimized structure to attract local diners.',
    client: 'Bistro Elegance',
    duration: '2 Months',
    role: 'Web Design & Development',
    results: ['300% increase in online reservations', '#1 Local SEO ranking', 'Mobile-first flawless experience'],
    techs: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    features: ['Table reservation system', 'Dynamic menu updates', 'SEO optimized']
  },
  { 
    title: 'Food Delivery App', cat: 'Mobile', color: '#10b981', icon: <Bike size={64} strokeWidth={1.5} />, 
    desc: 'Real-time food delivery app with live order tracking.',
    longDesc: 'A robust dual-sided mobile application connecting hungry customers with local restaurants and drivers. Features real-time GPS tracking and a microservice architecture to handle surge pricing and high traffic.',
    client: 'QuickBite Delivery',
    duration: '8 Months',
    role: 'Full-stack Mobile Eng.',
    results: ['10k+ daily deliveries', 'Average delivery time reduced by 12 mins', 'Scalable microservice backend'],
    techs: ['React Native', 'Google Maps API', 'Socket.io', 'Express'],
    features: ['Live driver tracking', 'Push notifications', 'Multi-cart checkout']
  },
  { 
    title: 'Portfolio Design System', cat: 'UI/UX', color: '#ec4899', icon: <Palette size={64} strokeWidth={1.5} />, 
    desc: 'Complete design system with components and guidelines.',
    longDesc: 'A comprehensive internal design system built to unify product lines across web and mobile. It includes reusable tokens, complex interactive components, and extensive documentation via Storybook.',
    client: 'MASH Tech Ltd',
    duration: 'Ongoing',
    role: 'Design Systems Engineering',
    results: ['Cut development time by 50%', '100% design consistency', 'Fully documented in Storybook'],
    techs: ['Figma', 'Storybook', 'Framer Motion', 'Radix UI'],
    features: ['Reusable component library', 'Accessibility compliant', 'Animation tokens']
  },
];

import { Link } from 'react-router-dom';

export default function Projects({ minimal = false }) {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active);
  const displayProjects = minimal ? filtered.slice(0, 6) : filtered;

  return (
    <section id="projects" className="section-alt" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Portfolio</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            Our Projects Have <span className="gradient-text">Been Done</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            A selection of work we're proud of. More coming from backend soon.
          </p>
        </div>

        {/* Filter */}
        {!minimal && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map(c => (
              <button key={c} className={`filter-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem' }}>
          {displayProjects.map((p, i) => (
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
                <p style={{ color: 'var(--text-secondary)', fontSize: '.825rem', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {minimal && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/projects" className="btn-primary" style={{ textDecoration: 'none' }}>
              See All Projects
            </Link>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--nav-bg)',
            backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem', animation: 'modalFadeIn 0.3s ease'
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: 'var(--card-bg)', border: `1px solid ${selected.color}40`,
              borderRadius: 24, width: '100%', maxWidth: 850,
              position: 'relative', boxShadow: `0 30px 60px ${selected.color}15`,
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              maxHeight: '92vh', overflow: 'hidden', display: 'flex', flexDirection: 'column'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header / Banner */}
            <div style={{
              padding: '2.5rem',
              background: `linear-gradient(120deg, ${selected.color}15, ${selected.color}02, transparent)`,
              borderBottom: '1px solid var(--input-border)',
              position: 'relative'
            }}>
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: 24, right: 24, background: 'var(--card-bg)',
                  border: '1px solid var(--input-border)', borderRadius: '50%', width: 40, height: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.2s', zIndex: 10
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--input-bg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 20,
                  background: `linear-gradient(135deg, ${selected.color}, ${selected.color}dd)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                  flexShrink: 0, boxShadow: `0 12px 24px ${selected.color}40`
                }}>
                  <div style={{ transform: 'scale(0.8)' }}>{selected.icon}</div>
                </div>
                <div>
                  <span style={{
                    display: 'inline-block', background: `${selected.color}15`, color: selected.color,
                    fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                    padding: '0.35rem 1rem', borderRadius: 50, marginBottom: '0.75rem',
                    border: `1px solid ${selected.color}30`
                  }}>{selected.cat}</span>
                  <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>{selected.title}</h3>
                </div>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--input-border)', background: 'var(--glass-bg)' }}>
              <div style={{ flex: 1, padding: '1.25rem 2.5rem', borderRight: '1px solid var(--input-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.25rem' }}>Client</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.client}</div>
              </div>
              <div style={{ flex: 1, padding: '1.25rem 2.5rem', borderRight: '1px solid var(--input-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.25rem' }}>Timeline</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.duration}</div>
              </div>
              <div style={{ flex: 1, padding: '1.25rem 2.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.25rem' }}>Role</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.role}</div>
              </div>
            </div>

            {/* Content (Scrollable) */}
            <div style={{ padding: '2.5rem', overflowY: 'auto', flex: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                
                {/* Left Col */}
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>Project Overview</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {selected.longDesc}
                  </p>
                  
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>Key Achievements</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {selected.results.map((r, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: selected.color, flexShrink: 0, marginTop: 6 }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Col */}
                <div>
                  <div style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: 16, border: '1px solid var(--input-border)', marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-secondary)' }}>Technologies Used</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {selected.techs.map((t, i) => (
                        <span key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--input-border)', padding: '0.4rem 0.8rem', borderRadius: 50, fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>Core Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {selected.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: selected.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid var(--input-border)', background: 'var(--input-bg)' }}>
              <a href="#" onClick={e => e.preventDefault()} className="btn-primary" style={{ background: selected.color, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none', padding: '1.25rem', borderRadius: 14, fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: `0 10px 20px ${selected.color}30`, transition: 'all 0.3s' }}>
                View Live Project <ExternalLink size={22} />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
