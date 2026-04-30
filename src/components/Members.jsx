import { useState } from 'react';
import { Github, Linkedin, Twitter, X, Mail } from 'lucide-react';

const members = [
  {
    name: 'Mashiur Rahman',
    role: 'Founder & CEO',
    initials: 'MR',
    color: '#3b82f6',
    bio: 'Full-stack architect with 10+ years building scalable digital products.',
    skills: ['System Architecture', 'React', 'Node.js', 'AWS', 'Team Leadership'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Rakib Hossain',
    role: 'Lead Backend Developer',
    initials: 'RH',
    color: '#8b5cf6',
    bio: 'Node.js & Express expert specializing in high-performance APIs and microservices.',
    skills: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'Microservices'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Nadia Islam',
    role: 'UI/UX Designer',
    initials: 'NI',
    color: '#ec4899',
    bio: 'Creating stunning, user-centric designs with Figma. Pixel-perfect every time.',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sabbir Ahmed',
    role: 'Frontend Developer',
    initials: 'SA',
    color: '#06b6d4',
    bio: 'React & Next.js specialist building blazing-fast, responsive web applications.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Tasnim Akter',
    role: 'Mobile App Developer',
    initials: 'TA',
    color: '#10b981',
    bio: 'Flutter enthusiast delivering beautiful cross-platform mobile experiences.',
    skills: ['Flutter', 'Dart', 'Firebase', 'State Management', 'iOS & Android'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Farhan Kabir',
    role: 'DevOps & Deployment',
    initials: 'FK',
    color: '#f59e0b',
    bio: 'VPS, cloud infrastructure, CI/CD pipelines and server management expert.',
    skills: ['Docker', 'AWS', 'CI/CD Pipelines', 'Linux Server', 'Nginx'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
  },
];

export default function Members() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="members" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Our Team</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            Meet Our <span className="gradient-text">Expert Members</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
            A passionate team of professionals dedicated to delivering world-class digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {members.map((m, i) => (
            <div
              key={i}
              className="glass-card member-card"
              onClick={() => setSelected(m)}
              style={{
                padding: '2rem',
                borderColor: 'rgba(255,255,255,.08)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = `${m.color}55`;
                e.currentTarget.style.boxShadow = `0 25px 50px ${m.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.35rem', fontWeight: 800, color: '#fff',
                  flexShrink: 0,
                  boxShadow: `0 8px 24px ${m.color}44`,
                }}>
                  {m.initials}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 3 }}>{m.name}</h3>
                  <span style={{
                    display: 'inline-block',
                    background: `${m.color}22`, color: m.color,
                    fontSize: '.7rem', fontWeight: 700,
                    letterSpacing: '.07em', textTransform: 'uppercase',
                    padding: '.2rem .65rem', borderRadius: 50,
                  }}>{m.role}</span>
                </div>
              </div>

              {/* Bio */}
              <p style={{ color: '#64748b', fontSize: '.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {m.bio}
              </p>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '.625rem' }}>
                {[
                  { icon: <Github size={15} />, href: m.socials.github },
                  { icon: <Linkedin size={15} />, href: m.socials.linkedin },
                  { icon: <Twitter size={15} />, href: m.socials.twitter },
                ].map((s, j) => (
                  <a
                    key={j} href={s.href}
                    style={{
                      width: 32, height: 32, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,.06)',
                      border: '1px solid rgba(255,255,255,.1)',
                      color: '#64748b', textDecoration: 'none',
                      transition: 'all .25s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${m.color}22`;
                      e.currentTarget.style.color = m.color;
                      e.currentTarget.style.borderColor = `${m.color}44`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,.06)';
                      e.currentTarget.style.color = '#64748b';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
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
              background: '#0a0f25', border: `1px solid ${selected.color}40`,
              borderRadius: 20, width: '100%', maxWidth: 500, padding: '2.5rem',
              position: 'relative', boxShadow: `0 20px 40px ${selected.color}20`,
              animation: 'modalSlideUp 0.4s ease',
              textAlign: 'center'
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

            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              background: `linear-gradient(135deg, ${selected.color}, ${selected.color}88)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem', fontWeight: 800, color: '#fff',
              margin: '0 auto 1.5rem',
              boxShadow: `0 12px 30px ${selected.color}44`,
            }}>
              {selected.initials}
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>{selected.name}</h3>
            <span style={{
              display: 'inline-block', background: `${selected.color}22`, color: selected.color,
              fontSize: '.8rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase',
              padding: '.3rem .85rem', borderRadius: 50, marginBottom: '1.5rem'
            }}>{selected.role}</span>

            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selected.bio}
              <br/><br/>
              With a strong background in software engineering and design, {selected.name} is dedicated to building robust and innovative solutions that drive business success.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Expertise</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                {selected.skills.map((skill, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.85rem', borderRadius: 50, fontSize: '0.85rem', color: '#e2e8f0' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: <Github size={18} />, href: selected.socials.github },
                { icon: <Linkedin size={18} />, href: selected.socials.linkedin },
                { icon: <Twitter size={18} />, href: selected.socials.twitter },
                { icon: <Mail size={18} />, href: '#' },
              ].map((s, j) => (
                <a
                  key={j} href={s.href} onClick={e => e.preventDefault()}
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                    color: '#64748b', textDecoration: 'none', transition: 'all .25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${selected.color}22`;
                    e.currentTarget.style.color = selected.color;
                    e.currentTarget.style.borderColor = `${selected.color}44`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,.06)';
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
