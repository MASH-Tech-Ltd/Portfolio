import { useState } from 'react';
import { Github, Linkedin, Twitter, X, Mail, Briefcase, FolderGit2, Users } from 'lucide-react';

const members = [
  {
    name: 'Mashiur Rahman',
    role: 'Founder & CEO',
    initials: 'MR',
    color: '#3b82f6',
    bio: 'Full-stack architect with 10+ years building scalable digital products.',
    fullDesc: 'As the driving force behind MASH Tech Ltd, Mashiur brings a wealth of entrepreneurial experience and technical expertise. He is passionate about crafting scalable architectures and leading teams to deliver products that redefine industry standards.',
    skills: ['System Architecture', 'React', 'Node.js', 'AWS', 'Team Leadership'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
    stats: { exp: '10+ Yrs', projects: '120+', clients: '80+' }
  },
  {
    name: 'Rakib Hossain',
    role: 'Lead Backend Developer',
    initials: 'RH',
    color: '#8b5cf6',
    bio: 'Node.js & Express expert specializing in high-performance APIs and microservices.',
    fullDesc: 'Rakib\'s deep understanding of server-side technologies ensures our applications are always fast, secure, and reliable. He focuses on building robust microservices that seamlessly handle complex business logic for our enterprise clients.',
    skills: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'Microservices'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
    stats: { exp: '6+ Yrs', projects: '50+', clients: '30+' }
  },
  {
    name: 'Nadia Islam',
    role: 'UI/UX Designer',
    initials: 'NI',
    color: '#ec4899',
    bio: 'Creating stunning, user-centric designs with Figma. Pixel-perfect every time.',
    fullDesc: 'Nadia believes that design is not just what it looks like, but how it works. She meticulously bridges the gap between aesthetic appeal and intuitive functionality, ensuring a delightful user journey in every product she crafts.',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
    stats: { exp: '4+ Yrs', projects: '65+', clients: '45+' }
  },
  {
    name: 'Sabbir Ahmed',
    role: 'Frontend Developer',
    initials: 'SA',
    color: '#06b6d4',
    bio: 'React & Next.js specialist building blazing-fast, responsive web applications.',
    fullDesc: 'With an eye for detail and a passion for modern web technologies, Sabbir transforms static designs into fluid, interactive experiences. He is obsessed with web performance, accessibility, and clean component architectures.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
    stats: { exp: '5+ Yrs', projects: '40+', clients: '25+' }
  },
  {
    name: 'Tasnim Akter',
    role: 'Mobile App Developer',
    initials: 'TA',
    color: '#10b981',
    bio: 'Flutter enthusiast delivering beautiful cross-platform mobile experiences.',
    fullDesc: 'Tasnim thrives in the mobile ecosystem, bringing innovative app ideas to life on both iOS and Android. Her dedication to native-like performance and buttery-smooth animations sets our mobile applications apart from the competition.',
    skills: ['Flutter', 'Dart', 'Firebase', 'State Management', 'iOS & Android'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
    stats: { exp: '3+ Yrs', projects: '20+', clients: '15+' }
  },
  {
    name: 'Farhan Kabir',
    role: 'DevOps & Deployment',
    initials: 'FK',
    color: '#f59e0b',
    bio: 'VPS, cloud infrastructure, CI/CD pipelines and server management expert.',
    fullDesc: 'Farhan is the guardian of our infrastructure. His rigorous approach to continuous integration, server hardening, and automated deployments ensures zero downtime and uncompromising security for all our deployed platforms.',
    skills: ['Docker', 'AWS', 'CI/CD Pipelines', 'Linux Server', 'Nginx'],
    socials: { github: '#', linkedin: '#', twitter: '#' },
    stats: { exp: '5+ Yrs', projects: '80+', clients: '50+' }
  }
];

import { Link } from 'react-router-dom';

export default function Members({ minimal = false }) {
  const [selected, setSelected] = useState(null);
  const displayMembers = minimal ? members.slice(0, 6) : members;

  return (
    <section id="members" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Our Team</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            Meet Our <span className="gradient-text">Expert Members</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
            A passionate team of professionals dedicated to delivering world-class digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {displayMembers.map((m, i) => (
            <div
              key={i}
              className="glass-card member-card"
              onClick={() => setSelected(m)}
              style={{
                padding: '2rem',
                borderColor: 'var(--card-border)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = `${m.color}55`;
                e.currentTarget.style.boxShadow = `0 25px 50px ${m.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.35rem', fontWeight: 800, color: '#ffffff',
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
              <p style={{ color: 'var(--text-secondary)', fontSize: '.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {m.bio}
              </p>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '.625rem' }}>
                {[
                  { icon: <Github size={15} />, href: m.socials.github },
                  { icon: <Linkedin size={15} />, href: m.socials.linkedin },
                  { icon: <Twitter size={15} />, href: m.socials.twitter },
                ].map((s, j) => (
                  <div
                    key={j}
                    style={{
                      width: 32, height: 32, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--input-border)',
                      color: 'var(--text-secondary)',
                      transition: 'all .25s',
                    }}
                  >
                    {s.icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {minimal && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/team" className="btn-primary" style={{ textDecoration: 'none' }}>
              Meet Full Team
            </Link>
          </div>
        )}
      </div>

      {/* Premium Profile Modal */}
      {selected && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--nav-bg)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem', animation: 'modalFadeIn 0.3s ease'
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: 'var(--card-bg)', border: `1px solid ${selected.color}40`,
              borderRadius: 24, width: '100%', maxWidth: 700,
              position: 'relative', boxShadow: `0 30px 60px ${selected.color}25`,
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              overflow: 'hidden', display: 'flex', flexDirection: 'column'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Banner Header */}
            <div style={{
              height: 140, width: '100%',
              background: `linear-gradient(120deg, ${selected.color}40, ${selected.color}10, transparent)`,
              position: 'relative'
            }}>
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: 16, right: 16, background: 'var(--card-bg)',
                  border: '1px solid var(--input-border)', borderRadius: '50%', width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.2s', zIndex: 10
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--input-bg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Profile Info overlapping banner */}
            <div style={{ padding: '0 2.5rem 2.5rem', marginTop: -60, position: 'relative' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${selected.color}, ${selected.color}99)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '3rem', fontWeight: 800, color: '#ffffff',
                  boxShadow: `0 12px 30px ${selected.color}55, 0 0 0 6px var(--card-bg)`,
                }}>
                  {selected.initials}
                </div>
                <div style={{ paddingBottom: '0.5rem', flex: 1 }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    {selected.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-block', background: `${selected.color}15`, color: selected.color,
                      fontSize: '.85rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase',
                      padding: '.35rem 1rem', borderRadius: 50, border: `1px solid ${selected.color}30`
                    }}>{selected.role}</span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div style={{ 
                display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap',
                background: 'var(--input-bg)', padding: '1.25rem', borderRadius: 16, border: '1px solid var(--input-border)' 
              }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: `${selected.color}20`, padding: '0.5rem', borderRadius: 10, color: selected.color }}>
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.stats.exp}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</div>
                  </div>
                </div>
                <div style={{ width: 1, background: 'var(--input-border)' }} />
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: `${selected.color}20`, padding: '0.5rem', borderRadius: 10, color: selected.color }}>
                    <FolderGit2 size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.stats.projects}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</div>
                  </div>
                </div>
                <div style={{ width: 1, background: 'var(--input-border)' }} />
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: `${selected.color}20`, padding: '0.5rem', borderRadius: 10, color: selected.color }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selected.stats.clients}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Clients</div>
                  </div>
                </div>
              </div>

              {/* Bio & Skills */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: selected.color }} />
                    About {selected.name.split(' ')[0]}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                    {selected.bio}
                    <br/><br/>
                    {selected.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: selected.color }} />
                    Core Expertise
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {selected.skills.map((skill, i) => (
                      <span key={i} style={{ 
                        background: 'var(--glass-bg)', border: '1px solid var(--input-border)', 
                        padding: '0.4rem 1rem', borderRadius: 50, fontSize: '0.85rem', fontWeight: 500,
                        color: 'var(--text-primary)', transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = selected.color;
                        e.currentTarget.style.color = selected.color;
                        e.currentTarget.style.background = `${selected.color}15`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--input-border)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.background = 'var(--glass-bg)';
                      }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: '2.5rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: selected.color }} />
                      Connect
                    </h4>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {[
                        { icon: <Github size={20} />, href: selected.socials.github },
                        { icon: <Linkedin size={20} />, href: selected.socials.linkedin },
                        { icon: <Twitter size={20} />, href: selected.socials.twitter },
                        { icon: <Mail size={20} />, href: '#' },
                      ].map((s, j) => (
                        <a
                          key={j} href={s.href} onClick={e => e.preventDefault()}
                          style={{
                            width: 44, height: 44, borderRadius: 12,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'var(--input-bg)', border: '1px solid var(--input-border)',
                            color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all .25s',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = selected.color;
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = selected.color;
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = `0 10px 20px ${selected.color}40`;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'var(--input-bg)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.borderColor = 'var(--input-border)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
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
