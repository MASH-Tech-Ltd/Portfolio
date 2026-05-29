import { useState } from 'react';
import { ArrowUpRight, Globe, Settings, Smartphone, Monitor, Server, Rocket, LineChart, X, Clock, Repeat, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web App Development',
    desc: 'Fast, scalable, beautiful web applications — from simple landing pages to complex SaaS platforms built with React, Next.js & Node.js.',
    longDesc: 'We architect and build modern web applications that scale with your business. Whether you need a customer portal, an e-commerce platform, or a complex SaaS dashboard, our team uses cutting-edge frameworks like React and Next.js to deliver blazing-fast, secure, and accessible web experiences.',
    img: '/web-development.png',
    gradient: 'linear-gradient(135deg,rgba(59,130,246,.2),rgba(99,102,241,.08))',
    accent: '#3b82f6',
    tag: 'Web',
    icon: <Globe size={64} strokeWidth={1.5} />,
    techs: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Mailer', 'jwt', 'stripe', 'github actions'],
    features: ['Custom UI/UX Design', 'Responsive Layouts','Secure Authentication', 'REST APIs', 'High Performance','Secure Backend','Payment Gateway','Social Authentication','Email Authentication','Hosting'],
    stats: { time: '2-4 Weeks', revisions: 'Unlimited', support: '3 Months Free' }
  },
  {
    title: 'Web Management',
    desc: 'Complete website maintenance, performance optimization, content updates, and 24/7 support to keep your online presence flawless.',
    longDesc: 'Leave the technical headaches to us. We handle everything from daily backups and security patches to content updates and speed optimization. Our proactive monitoring ensures your website stays online, secure, and performs at its absolute best 24/7.',
    img: '/illustration-2.png',
    gradient: 'linear-gradient(135deg,rgba(16,185,129,.2),rgba(6,182,212,.08))',
    accent: '#10b981',
    tag: 'Management',
    icon: <Settings size={64} strokeWidth={1.5} />,
    techs: ['WordPress', 'cPanel', 'Cloudflare', 'Google Analytics'],
    features: ['24/7 Monitoring', 'Security Updates', 'Speed Optimization', 'Weekly Backups'],
    stats: { time: 'Ongoing', revisions: 'Monthly', support: '24/7 Priority' }
  },
  {
    title: 'App Development',
    desc: 'Stunning iOS and Android apps built with Flutter. From concept to App Store — we deliver seamless cross-platform experiences.',
    longDesc: 'Reach your audience on their favorite devices with high-performance mobile applications. We use Flutter to build beautiful, natively compiled applications for mobile from a single codebase, significantly reducing time-to-market and maintenance costs while delivering a premium user experience.',
    img: '/illustration-1.png',
    gradient: 'linear-gradient(135deg,rgba(139,92,246,.2),rgba(236,72,153,.08))',
    accent: '#8b5cf6',
    tag: 'Mobile',
    icon: <Smartphone size={64} strokeWidth={1.5} />,
    techs: ['Flutter', 'Dart', 'Firebase','mongodb', 'REST APIs','jwt', 'stripe', 'github actions','hosting','mailer','ui/ux','payments','social authentication','email authentication','real time'],
    features: ['Cross-Platform', 'Native Performance','Secure Authentication' ,'Push Notifications', 'Offline Support','real-time chat','file sharing'],
    stats: { time: '4-8 Weeks', revisions: 'Unlimited', support: '6 Months Free' }
  },
  {
    title: 'Backend Development',
    desc: 'Robust, secure REST APIs with Node.js, Express, and TypeScript. Scalable architectures backed by MongoDB and cloud services.',
    longDesc: 'The backbone of any great application is a solid backend. We design robust microservices and APIs using Node.js and Express that can handle massive traffic. Our database architectures ensure data integrity, rapid querying, and bank-level security for your most sensitive information.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(245,158,11,.2),rgba(234,88,12,.08))',
    accent: '#f59e0b',
    tag: 'Backend',
    icon: <Monitor size={64} strokeWidth={1.5} />,
    techs: ['Node.js', 'Express', 'mongodb', 'jwt', 'stripe', 'github actions', 'REST APIs','real time','Secure Authentication','Ai Chatbots'],
    features: ['Secure Authentication', 'Database Design', 'API Documentation','real time','Ai Chatbots','AI integration',' Payments','social authentication','email authentication'],
    stats: { time: '3-6 Weeks', revisions: '3 Rounds', support: '6 Months Free' }
  },
  {
    title: 'Server Management',
    desc: 'Professional VPS setup, Linux server configuration, security hardening, monitoring, and ongoing server maintenance for 99.9% uptime.',
    longDesc: 'Ensure your applications run in a highly secure and optimized environment. We provide complete Linux server administration, including OS hardening, firewall configurations, Nginx/Apache tuning, and continuous resource monitoring to prevent bottlenecks before they occur.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(6,182,212,.2),rgba(59,130,246,.08))',
    accent: '#06b6d4',
    tag: 'DevOps',
    icon: <Server size={64} strokeWidth={1.5} />,
    techs: ['Linux (Ubuntu/CentOS)', 'Nginx', 'Apache', 'Docker'],
    features: ['Server Hardening', 'Load Balancing', 'Firewall Setup', 'Resource Monitoring'],
    stats: { time: '3-5 Days', revisions: 'As Needed', support: '24/7 Monitoring' }
  },
  {
    title: 'Deployment',
    desc: 'End-to-end deployment pipelines — CI/CD setup, domain configuration, SSL certificates, Docker containers, and cloud hosting solutions.',
    longDesc: 'Modern software requires modern delivery pipelines. We automate your entire deployment process using GitHub Actions, Docker, and Kubernetes. By setting up continuous integration and deployment, we enable your team to ship features faster with zero downtime and instant rollbacks.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(236,72,153,.2),rgba(139,92,246,.08))',
    accent: '#ec4899',
    tag: 'Deploy',
    icon: <Rocket size={64} strokeWidth={1.5} />,
    techs: ['GitHub Actions', 'AWS / DigitalOcean', 'Docker', 'Vercel','Hostinger','VPS'],
    features: ['Automated Testing', 'Zero-Downtime Deploy', 'SSL Configuration', 'Domain Management'],
    stats: { time: '1-2 Weeks', revisions: '2 Rounds', support: '30 Days Free' }
  },
  {
    title: 'SEO Optimization',
    desc: 'Boost your search rankings with on-page SEO, technical audits, keyword research, link building, performance optimization, and detailed analytics reporting.',
    longDesc: 'A beautiful website is useless if nobody can find it. Our SEO strategies go beyond just keywords; we conduct deep technical audits, optimize Core Web Vitals, build high-authority backlinks, and structure your content to dominate search engine results and drive organic traffic.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(16,185,129,.2),rgba(6,182,212,.08))',
    accent: '#10b981',
    tag: 'SEO',
    icon: <LineChart size={64} strokeWidth={1.5} />,
    techs: ['Google Search Console', 'Ahrefs / SEMrush', 'Lighthouse', 'Yoast SEO'],
    features: ['Keyword Research', 'Technical Audits', 'On-Page Optimization', 'Backlink Strategy'],
    stats: { time: 'Monthly', revisions: 'Ongoing', support: 'Dedicated Manager' }
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Integrate intelligent AI models, chatbots, and data analytics into your platforms to automate processes and unlock deep insights.',
    longDesc: 'Leverage the power of Artificial Intelligence to automate repetitive tasks and provide smarter experiences. From custom ChatGPT integrations to predictive data models and NLP algorithms, we help you harness the future of technology to stay ahead of the curve.',
    img: null,
    gradient: 'linear-gradient(135deg,rgba(139,92,246,.2),rgba(59,130,246,.08))',
    accent: '#8b5cf6',
    tag: 'AI',
    icon: <Rocket size={64} strokeWidth={1.5} />,
    techs: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain', 'Pandas'],
    features: ['Custom AI Chatbots', 'Predictive Analytics', 'Natural Language Processing', 'Process Automation'],
    stats: { time: '4-8 Weeks', revisions: 'Unlimited', support: '6 Months Free' }
  },
];

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
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: 520, margin: '1rem auto 0' }}>
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
            <div 
              key={i} 
              className="service-card" 
              onClick={() => setSelected(s)}
              style={{
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${s.accent}20`;
                e.currentTarget.style.borderColor = `${s.accent}50`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
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
                <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.72 }}>{s.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  color: s.accent, fontSize: '.85rem', fontWeight: 600,
                  marginTop: '1rem', textDecoration: 'none', transition: 'gap .2s',
                }}>
                  Get This Service <ArrowUpRight size={15} />
                </div>
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

      {/* Premium Service Modal */}
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
              background: 'var(--card-bg)', border: `1px solid ${selected.accent}40`,
              borderRadius: 24, width: '100%', maxWidth: 850,
              position: 'relative', boxShadow: `0 30px 60px ${selected.accent}20`,
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex', flexDirection: 'column', maxHeight: '92vh', overflow: 'hidden'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Banner Header */}
            <div style={{
              padding: '2.5rem',
              background: `linear-gradient(120deg, ${selected.accent}20, ${selected.accent}05, transparent)`,
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
                  background: `linear-gradient(135deg, ${selected.accent}, ${selected.accent}99)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', flexShrink: 0,
                  boxShadow: `0 12px 24px ${selected.accent}55`,
                }}>
                  {selected.img ? (
                    <img src={selected.img} alt={selected.title} style={{ width: 40, height: 40, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                  ) : (
                    <div style={{ transform: 'scale(1.1)' }}>{selected.icon}</div>
                  )}
                </div>
                <div>
                  <span style={{
                    display: 'inline-block', background: `${selected.accent}22`, color: selected.accent,
                    fontSize: '.8rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase',
                    padding: '.35rem 1rem', borderRadius: 50, marginBottom: '0.75rem', border: `1px solid ${selected.accent}40`
                  }}>{selected.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>{selected.title}</h3>
                </div>
              </div>
            </div>

            {/* Service Stats Row */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--input-border)', background: 'var(--glass-bg)', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 150, padding: '1.25rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRight: '1px solid var(--input-border)' }}>
                <Clock size={24} color={selected.accent} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Delivery Time</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.stats.time}</div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 150, padding: '1.25rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRight: '1px solid var(--input-border)' }}>
                <Repeat size={24} color={selected.accent} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Revisions</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.stats.revisions}</div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 150, padding: '1.25rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ShieldCheck size={24} color={selected.accent} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Support</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.stats.support}</div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div style={{ padding: '2.5rem', overflowY: 'auto', flex: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                
                {/* Left Column: Description & Includes */}
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: selected.accent }} />
                    About This Service
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    {selected.desc}
                    <br/><br/>
                    {selected.longDesc}
                  </p>

                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: selected.accent }} />
                    What's Included
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selected.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.5 }}>
                        <CheckCircle2 size={20} color={selected.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Technologies & CTA */}
                <div>
                  <div style={{ background: 'var(--input-bg)', padding: '2rem', borderRadius: 20, border: '1px solid var(--input-border)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Monitor size={20} color={selected.accent} />
                      Core Technologies
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                      {selected.techs.map((t, i) => (
                        <span key={i} style={{ 
                          background: 'var(--glass-bg)', border: '1px solid var(--input-border)', 
                          padding: '0.5rem 1rem', borderRadius: 8, fontSize: '0.9rem', fontWeight: 500,
                          color: 'var(--text-primary)' 
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href="#contact" onClick={() => setSelected(null)} style={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', 
                      background: selected.accent, color: '#ffffff', padding: '1.1rem 2rem', 
                      borderRadius: 12, fontSize: '1rem', fontWeight: 800, textDecoration: 'none', 
                      textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.3s', 
                      boxShadow: `0 10px 20px ${selected.accent}40`, width: '100%'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                    >
                      Get Started <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
