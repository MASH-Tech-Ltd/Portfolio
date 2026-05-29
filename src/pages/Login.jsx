import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldAlert } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock login logic
    setTimeout(() => {
      if (email === 'admin@mashtech.com' && password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        navigate('/admin');
      } else {
        alert('Invalid credentials. Access Denied.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'var(--bg-color)', position: 'relative', overflow: 'hidden'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: '10%', left: '20%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '20%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div className="glass-card" style={{
        width: '100%', maxWidth: 450, padding: '3rem 2.5rem',
        border: '1px solid var(--input-border)', borderRadius: 24,
        zIndex: 10, backdropFilter: 'blur(16px)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(59,130,246,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
            color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)'
          }}>
            <ShieldAlert size={32} />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Admin Access</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Please enter your credentials to continue</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="email"
                required
                placeholder="admin@mashtech.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%', background: 'var(--glass-bg)', border: '1px solid var(--card-border)',
                  borderRadius: 12, padding: '0.85rem 1rem 0.85rem 3rem', color: 'var(--text-primary)', fontSize: '0.95rem',
                  transition: 'all 0.3s'
                }}
                onFocus={e => e.target.style.borderColor = '#3b82f6'}
                onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%', background: 'var(--glass-bg)', border: '1px solid var(--card-border)',
                  borderRadius: 12, padding: '0.85rem 1rem 0.85rem 3rem', color: 'var(--text-primary)', fontSize: '0.95rem',
                  transition: 'all 0.3s'
                }}
                onFocus={e => e.target.style.borderColor = '#3b82f6'}
                onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Password</label>
              <Link to="/forgot-password" style={{ fontSize: '0.825rem', color: '#3b82f6', textDecoration: 'none' }}>Forgot Password?</Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{
              width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
              marginTop: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Authenticating...' : (
              <>
                Sign In <LogIn size={20} />
              </>
            )}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none' }}>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
