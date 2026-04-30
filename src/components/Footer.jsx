import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#members' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Web App Development', href: '#services' },
  { label: 'Web Management', href: '#services' },
  { label: 'App Development', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
  { label: 'SEO Optimization', href: '#services' },
  { label: 'Backend Development', href: '#services' },
  { label: 'Server Management', href: '#services' },
  { label: 'Cloud & DevOps', href: '#services' },
];

const socials = [
  { icon: <Facebook size={17} />, href: '#', label: 'Facebook' },
  { icon: <Twitter size={17} />, href: '#', label: 'Twitter' },
  { icon: <Instagram size={17} />, href: '#', label: 'Instagram' },
  { icon: <Linkedin size={17} />, href: '#', label: 'LinkedIn' },
  { icon: <Github size={17} />, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: '4rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>

          {/* Brand column */}
          <div style={{ maxWidth: 280 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="MASH Tech Ltd" style={{ height: 44, width: 'auto', objectFit: 'contain', borderRadius: '50%' }} />
            </a>
            <p style={{ color: '#475569', fontSize: '.875rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Smart digital solutions for businesses of all sizes. We turn ideas into powerful digital experiences.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                  color: '#94a3b8', textDecoration: 'none', transition: 'all .3s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,.2)'; e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.borderColor = 'rgba(59,130,246,.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '1.25rem', color: '#fff' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              {quickLinks.map((l, i) => (
                <li key={i} style={{ marginBottom: '.75rem' }}>
                  <a href={l.href} style={{ color: '#475569', textDecoration: 'none', fontSize: '.875rem', transition: 'color .2s', display: 'flex', alignItems: 'center', gap: 6 }}
                    onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                    <ArrowRight size={13} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '1.25rem', color: '#fff' }}>Services</h4>
            <ul style={{ listStyle: 'none' }}>
              {serviceLinks.map((l, i) => (
                <li key={i} style={{ marginBottom: '.75rem' }}>
                  <a href={l.href} style={{ color: '#475569', textDecoration: 'none', fontSize: '.875rem', transition: 'color .2s', display: 'flex', alignItems: 'center', gap: 6 }}
                    onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                    <ArrowRight size={13} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: '1.25rem', color: '#fff' }}>Stay Updated</h4>
            <p style={{ color: '#475569', fontSize: '.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              <input
                type="email" placeholder="your@email.com"
                className="input-field" style={{ flex: 1, padding: '.7rem 1rem', fontSize: '.825rem' }}
              />
              <button className="btn-primary" style={{ padding: '.7rem 1rem', flexShrink: 0 }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.06)',
          padding: '1.5rem 0',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: '1rem'
        }}>
          <p style={{ color: '#334155', fontSize: '.825rem' }}>
            © {new Date().getFullYear()} MASH Tech Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t, i) => (
              <a key={i} href="#" style={{ color: '#334155', fontSize: '.825rem', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
