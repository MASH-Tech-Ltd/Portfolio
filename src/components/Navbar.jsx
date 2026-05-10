import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all .35s',
        background: scrolled || pathname !== '/' ? 'rgba(6,8,24,.85)' : 'transparent',
        backdropFilter: scrolled || pathname !== '/' ? 'blur(18px)' : 'none',
        borderBottom: scrolled || pathname !== '/' ? '1px solid rgba(255,255,255,.07)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo.png" alt="MASH Tech Ltd" style={{ height: 48, width: 'auto', objectFit: 'contain', borderRadius: '50%' }} />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
            {links.map(l => (
              <Link key={l.label} to={l.href} className="nav-link"
                style={{ 
                  color: pathname === l.href ? '#3b82f6' : '#94a3b8', 
                  textDecoration: 'none', 
                  fontSize: '.9rem', 
                  fontWeight: 500,
                  transition: 'color 0.2s'
                }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden-mobile">
            <Link to="/contact" className="btn-primary pulse-glow" style={{ textDecoration: 'none', fontSize: '.875rem', padding: '.65rem 1.5rem' }}>
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}
            className="show-mobile"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="glass-card show-mobile" style={{ marginBottom: 12, padding: '1.25rem 1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map(l => (
                <Link key={l.label} to={l.href}
                  style={{ color: pathname === l.href ? '#3b82f6' : '#94a3b8', textDecoration: 'none', fontWeight: 500 }}
                  onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary" onClick={() => setOpen(false)}
                style={{ textDecoration: 'none', justifyContent: 'center', marginTop: 8 }}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media(min-width:768px){ .hidden-mobile{ display:flex !important; } .show-mobile{ display:none !important; } }
        @media(max-width:767px){ .hidden-mobile{ display:none !important; } .show-mobile{ display:block !important; } }
      `}</style>
    </nav>
  );
}
