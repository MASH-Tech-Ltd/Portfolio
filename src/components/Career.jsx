import { useState } from 'react';
import { Briefcase, ArrowRight, MapPin, Clock, X, CheckCircle2 } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Join our team to build highly interactive, performant web applications using React and Next.js.',
    longDesc: 'We are seeking an experienced Frontend Engineer who is passionate about creating beautiful, high-performance web applications. You will work closely with our design and backend teams to deliver exceptional user experiences from end to end.',
    requirements: ['5+ years of experience with React.js', 'Deep understanding of Next.js and Server-Side Rendering', 'Proficiency in TypeScript and modern JavaScript', 'Experience with Tailwind CSS and responsive design'],
    link: '#'
  },
  {
    title: 'Backend Node.js Developer',
    type: 'Full-Time',
    location: 'Dhaka, Bangladesh / Remote',
    desc: 'Design and implement scalable APIs and microservices. Experience with MongoDB and AWS required.',
    longDesc: 'As a Backend Developer, you will be responsible for architecting and building robust, scalable APIs. You will play a critical role in ensuring our services are secure, fast, and capable of handling high traffic volumes.',
    requirements: ['Strong proficiency in Node.js and Express', 'Experience designing RESTful and GraphQL APIs', 'Expertise with MongoDB and database optimization', 'Familiarity with AWS, Docker, and CI/CD pipelines'],
    link: '#'
  },
  {
    title: 'UI/UX Product Designer',
    type: 'Contract',
    location: 'Remote',
    desc: 'Create beautiful, user-centric designs and design systems using Figma.',
    longDesc: 'We are looking for a creative UI/UX Designer to shape the visual identity of our products. You will be responsible for translating user needs and business goals into intuitive, pixel-perfect interfaces.',
    requirements: ['Proven track record of designing modern web applications', 'Expertise in Figma and creating scalable design systems', 'Strong understanding of user-centered design principles', 'Ability to create interactive prototypes and user flows'],
    link: '#'
  }
];

export default function Career() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="career" className="section-alt" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Careers</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            Join Our <span className="gradient-text">Growing Team</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem', maxWidth: 600, margin: '1rem auto 0', lineHeight: 1.7 }}>
            We're always looking for passionate, talented individuals to join us in building innovative digital solutions.
            Check out our open positions below.
          </p>
        </div>

        {/* Jobs Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {jobs.map((job, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: '2rem', transition: 'transform 0.3s, border-color 0.3s', cursor: 'pointer' }}
              onClick={() => setSelected(job)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Briefcase size={24} />
                </div>
                <span style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', padding: '0.25rem 0.75rem', borderRadius: 50, fontSize: '0.8rem', fontWeight: 600 }}>
                  {job.type}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{job.title}</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                <MapPin size={16} />
                <span>{job.location}</span>
                <span style={{ margin: '0 0.5rem' }}>•</span>
                <Clock size={16} />
                <span>Actively Hiring</span>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {job.desc}
              </p>

              <a href={job.link} onClick={e => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                Apply Now <ArrowRight size={16} />
              </a>
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
              background: '#0a0f25', border: '1px solid rgba(59,130,246,0.4)',
              borderRadius: 20, width: '100%', maxWidth: 700, padding: '2.5rem',
              position: 'relative', boxShadow: '0 20px 40px rgba(59,130,246,0.2)',
              animation: 'modalSlideUp 0.4s ease', maxHeight: '90vh', overflowY: 'auto'
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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', padding: '0.35rem 0.85rem', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {selected.type}
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>{selected.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                  <MapPin size={18} />
                  <span>{selected.location}</span>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: '2rem' }} />

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>About The Role</h4>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              {selected.longDesc}
            </p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>Requirements</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {selected.requirements.map((req, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={20} color="#3b82f6" style={{ flexShrink: 0, marginTop: 2 }} />
                  {req}
                </li>
              ))}
            </ul>

            <a href={selected.link} onClick={e => e.preventDefault()} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Apply for this Position <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
