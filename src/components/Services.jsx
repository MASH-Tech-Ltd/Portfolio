import { useState } from 'react';
import { ArrowUpRight, Globe, Settings, Smartphone, Monitor, Server, Rocket, LineChart, X } from 'lucide-react';

const services = [
  {
    title: 'Web App Development',
    desc: 'Fast, scalable, beautiful web applications — from simple landing pages to complex SaaS platforms built with React, Next.js & Node.js.',
    img: '/web-development.png',
    gradient: 'linear-gradient(135deg,rgba(59,130,246,.2),rgba(99,102,241,.08))',
    accent: '#3b82f6',
    tag: 'Web',
    icon: <Globe size={64} strokeWidth={1.5} />,
    techs: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Mailer', 'jwt', 'stripe', 'github actions'],
    features: ['Custom UI/UX Design', 'Responsive Layouts','Secure Authentication', 'REST APIs', 'High Performance','Secure Backend','Payment Gateway','Social Authentication','Email Authentication','Hosting']
  },
  {
    title: 'Web Management',
    desc: 'Complete website maintenance, performance optimization, content updates, and 24/7 support to keep your online presence flawless.',
    img: '/illustration-2.png',
    gradient: 'linear-gradient(135deg,rgba(16,185,129,.2),rgba(6,182,212,.08))',
    accent: '#10b981',
    tag: 'Management',
    icon: <Settings size={64} strokeWidth={1.5} />,
    techs: ['WordPress', 'cPanel', 'Cloudflare', 'Google Analytics'],
    features: ['24/7 Monitoring', 'Security Updates', 'Speed Optimization', 'Weekly Backups']
  },
  {
    title: 'App Development',
    desc: 'Stunning iOS and Android apps built with Flutter. From concept to App Store — we deliver seamless cross-platform experiences.',
    img: '/illustration-1.png',
    gradient: 'linear-gradient(135deg,rgba(139,92,246,.2),rgba(236,72,153,.08))',
    accent: '#8b5cf6',
    tag: 'Mobile',
    icon: <Smartphone size={64} strokeWidth={1.5} />,
    techs: ['Flutter', 'Dart', 'Firebase','mongodb', 'REST APIs','jwt', 'stripe', 'github actions','hosting','mailer','ui/ux','payments','social authentication','email authentication','real time'],
    features: ['Cross-Platform', 'Native Performance','Secure Authentication' ,'Push Notifications', 'Offline Support','real-time chat','file sharing']
  },
  {
    title: 'Backend Development',
    desc: 'Robust, secure REST APIs with Node.js, Express, and TypeScript. Scalable architectures backed by MongoDB and cloud services.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(245,158,11,.2),rgba(234,88,12,.08))',
    accent: '#f59e0b',
    tag: 'Backend',
    icon: <Monitor size={64} strokeWidth={1.5} />,
    techs: ['Node.js', 'Express', 'mongodb', 'jwt', 'stripe', 'github actions', 'REST APIs','real time','Secure Authentication','Ai Chatbots'],
    features: ['Secure Authentication', 'Database Design', 'API Documentation','real time','Ai Chatbots','AI integration',' Payments','social authentication','email authentication']
  },
  {
    title: 'Server Management',
    desc: 'Professional VPS setup, Linux server configuration, security hardening, monitoring, and ongoing server maintenance for 99.9% uptime.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(6,182,212,.2),rgba(59,130,246,.08))',
    accent: '#06b6d4',
    tag: 'DevOps',
    icon: <Server size={64} strokeWidth={1.5} />,
    techs: ['Linux (Ubuntu/CentOS)', 'Nginx', 'Apache', 'Docker'],
    features: ['Server Hardening', 'Load Balancing', 'Firewall Setup', 'Resource Monitoring']
  },
  {
    title: 'Deployment',
    desc: 'End-to-end deployment pipelines — CI/CD setup, domain configuration, SSL certificates, Docker containers, and cloud hosting solutions.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(236,72,153,.2),rgba(139,92,246,.08))',
    accent: '#ec4899',
    tag: 'Deploy',
    icon: <Rocket size={64} strokeWidth={1.5} />,
    techs: ['GitHub Actions', 'AWS / DigitalOcean', 'Docker', 'Vercel','Hostinger','VPS'],
    features: ['Automated Testing', 'Zero-Downtime Deploy', 'SSL Configuration', 'Domain Management']
  },
  {
    title: 'SEO Optimization',
    desc: 'Boost your search rankings with on-page SEO, technical audits, keyword research, link building, performance optimization, and detailed analytics reporting.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(16,185,129,.2),rgba(6,182,212,.08))',
    accent: '#10b981',
    tag: 'SEO',
    icon: <LineChart size={64} strokeWidth={1.5} />,
    techs: ['Google Search Console', 'Ahrefs / SEMrush', 'Lighthouse', 'Yoast SEO'],
    features: ['Keyword Research', 'Technical Audits', 'On-Page Optimization', 'Backlink Strategy']
  },
];

import { Link } from 'react-router-dom';

export default function Services({ minimal = false }) {
  const [selected, setSelected] = useState(null);
  const displayServices = minimal ? services.slice(0, 6) : services;

  return (
    <section id="services" className="section-alt" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Our Services</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            The Services We Offer <span className="gradient-text">For You</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: 520, margin: '1rem auto 0' }}>
            End-to-end digital solutions crafted to accelerate your business growth.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}>
          {displayServices.map((s, i) => (
            <div key={i} className="service-card" onClick={() => setSelected(s)}>
              {/* Image / icon area */}
              <div style={{
                background: s.gradient,
                padding: '1.75rem',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                minHeight: s.img ? 180 : 130,
                position: 'relative', overflow: 'hidden',
              }}>
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{
                      width: '100%', maxWidth: 200, height: 140,
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 12px 24px rgba(0,0,0,.4))',
                    }}
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: s.accent }}>
                    <div style={{ filter: `drop-shadow(0 8px 20px ${s.accent}80)` }}>
                      {s.icon}
                    </div>
                  </div>
                )}
                {/* Glow orb */}
                <div style={{
                  position: 'absolute', bottom: -30, right: -30,
                  width: 120, height: 120, borderRadius: '50%',
                  background: `radial-gradient(circle, ${s.accent}33, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem' }}>
                <span style={{
                  display: 'inline-block',
                  background: `${s.accent}22`, color: s.accent,
                  fontSize: '.7rem', fontWeight: 700,
                  letterSpacing: '.08em', textTransform: 'uppercase',
                  padding: '.25rem .75rem', borderRadius: 50, marginBottom: '.75rem',
                }}>{s.tag}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '.6rem' }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '.875rem', lineHeight: 1.72 }}>{s.desc}</p>
                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  color: s.accent, fontSize: '.85rem', fontWeight: 600,
                  marginTop: '1rem', textDecoration: 'none', transition: 'gap .2s',
                }}>
                  Get This Service <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {minimal && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
              See All Services
            </Link>
          </div>
        )}
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
              background: '#0a0f25', border: `1px solid ${selected.accent}40`,
              borderRadius: 20, width: '100%', maxWidth: 850, padding: '2.5rem',
              position: 'relative', boxShadow: `0 20px 40px ${selected.accent}20`,
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
                    width: 70, height: 70, borderRadius: 16, background: selected.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: selected.accent
                  }}>
                    {selected.img ? (
                      <img src={selected.img} alt={selected.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                    ) : (
                      <div style={{ transform: 'scale(0.6)' }}>{selected.icon}</div>
                    )}
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block', background: `${selected.accent}22`, color: selected.accent,
                      fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
                      padding: '.25rem .75rem', borderRadius: 50, marginBottom: '.5rem'
                    }}>{selected.tag}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selected.title}</h3>
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {selected.desc}
                  <br/><br/>
                  Our expert team works closely with you to understand your requirements and deliver a solution that exceeds your expectations.
                </p>

                <a href="#contact" onClick={() => setSelected(null)} className="btn-primary" style={{ background: selected.accent, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                  Get Started with {selected.title}
                </a>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>Core Technologies</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {selected.techs.map((t, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 50, fontSize: '0.8rem', color: '#e2e8f0' }}>{t}</span>
                  ))}
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>What's Included</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {selected.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: selected.accent }} />
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
