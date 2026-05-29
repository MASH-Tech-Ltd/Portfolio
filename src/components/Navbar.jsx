import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './common/ThemeProvider';

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
  const { theme, toggleTheme } = useTheme();

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
        background: scrolled || pathname !== '/' ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled || pathname !== '/' ? 'blur(18px)' : 'none',
        borderBottom: scrolled || pathname !== '/' ? '1px solid var(--nav-border)' : 'none',
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
                  color: pathname === l.href ? '#3b82f6' : 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '.9rem', 
                  fontWeight: 500,
                  transition: 'color 0.2s'
                }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleTheme} style={{ background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s' }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/contact" className="btn-primary pulse-glow" style={{ textDecoration: 'none', fontSize: '.875rem', padding: '.65rem 1.5rem' }}>
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="show-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={toggleTheme} style={{ background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer' }}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 4 }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="glass-card show-mobile" style={{ marginBottom: 12, padding: '1.25rem 1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map(l => (
                <Link key={l.label} to={l.href}
                  style={{ color: pathname === l.href ? '#3b82f6' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}
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
        @media(max-width:767px){ .hidden-mobile{ display:none !important; } .show-mobile{ display:flex !important; } }
      `}</style>
    </nav>
  );
}
