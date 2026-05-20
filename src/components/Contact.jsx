import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using EmailJS REST API
    const data = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: form.name,
        from_email: form.email,
        email: form.email,
        subject: form.subject,
        message: form.message
      }
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorText = await res.text();
        alert("Something went wrong: " + errorText);
      }
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Contact Us</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            Let's <span className="gradient-text">Discuss</span> &amp; Bring<br />Your Vision To Life
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem' }}>
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '3rem'
        }}>

          {/* Left – info */}
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1rem' }}>
              Register Your Interest
            </h3>
            <p style={{ color: '#64748b', lineHeight: 1.75, marginBottom: '2rem' }}>
              Fill out the form and our team will get back to you within 24 hours.
              We're here to help you achieve your digital goals.
            </p>

            {[
              { icon: <Mail size={18} />, label: 'Email Us', val: 'mashtech@proton.me' },
              // { icon: <Phone size={18} />, label: 'Call Us', val: '+880 1700 000 000' },
              { icon: <MapPin size={18} />, label: 'Location', val: 'Dhaka, Bangladesh' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(59,130,246,.12)', border: '1px solid rgba(59,130,246,.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: '#475569', fontSize: '.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{item.label}</p>
                  <p style={{ fontWeight: 500, fontSize: '.9rem' }}>{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right – form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            {sent && (
              <div style={{
                background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)',
                borderRadius: 10, padding: '1rem', marginBottom: '1.5rem',
                color: '#10b981', textAlign: 'center', fontWeight: 600
              }}>
                ✅ Message sent! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '.8rem', marginBottom: 6 }}>Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    placeholder="John Doe" className="input-field" />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '.8rem', marginBottom: 6 }}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="john@example.com" className="input-field" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '.8rem', marginBottom: 6 }}>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="Project Inquiry" className="input-field" />
              </div>
              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '.8rem', marginBottom: 6 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required
                  rows={5} placeholder="Tell us about your project..."
                  className="input-field" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary pulse-glow" style={{ justifyContent: 'center', marginTop: '.5rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
