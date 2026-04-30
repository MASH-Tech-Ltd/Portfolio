import { Trophy, FolderCheck, Smile, Award } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years of Experience', icon: <Trophy size={32} /> },
  { value: '666+', label: 'Projects Completed', icon: <FolderCheck size={32} /> },
  { value: '555+', label: 'Satisfied Clients', icon: <Smile size={32} /> },
  { value: '10+', label: 'Awards Received', icon: <Award size={32} /> },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '4rem', alignItems: 'center'
        }}>

          {/* Left – text */}
          <div>
            <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>About Us</span>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 800, marginTop: 12, marginBottom: '1.25rem' }}>
              We Are <span className="gradient-text">Passionate</span> About<br />Digital Excellence
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>
              We are passionate about helping businesses grow and succeed in the digital age.
              We take pride in our work and strive to exceed your expectations every time.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Our dedicated team of designers, developers, and strategists collaborate
              to deliver premium digital solutions that drive real business results.
            </p>
            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', width: 'fit-content' }}>
              Work With Us
            </a>
          </div>

          {/* Right – stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ color: '#3b82f6', marginBottom: '.5rem', display: 'flex' }}>{s.icon}</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 900, lineHeight: 1 }} className="gradient-text">
                  {s.value}
                </div>
                <div style={{ color: '#64748b', fontSize: '.85rem', marginTop: '.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
