import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft, RefreshCcw, Key } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock reset logic
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'var(--bg-color)', position: 'relative', overflow: 'hidden'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: '10%', right: '20%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div className="glass-card" style={{
        width: '100%', maxWidth: 450, padding: '3rem 2.5rem',
        border: '1px solid var(--input-border)', borderRadius: 24,
        zIndex: 10, backdropFilter: 'blur(16px)'
      }}>
        {!submitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(236,72,153,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)'
              }}>
                <Key size={32} />
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Reset Password</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Enter your email to receive reset instructions</p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Admin Email</label>
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
                    onFocus={e => e.target.style.borderColor = '#ec4899'}
                    onBlur={e => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                  marginTop: '1rem', border: 'none', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Reset Link <RefreshCcw size={20} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(34,197,94,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
              color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)'
            }}>
              <Mail size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Check Your Email</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              We've sent password reset instructions to <strong>{email}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              Didn't receive it? Try again
            </button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/login" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={14} /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
