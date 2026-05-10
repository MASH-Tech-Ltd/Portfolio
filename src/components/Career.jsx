import { useState } from 'react';
import { Briefcase, ArrowRight, MapPin, Clock, X, CheckCircle2 } from 'lucide-react';

const jobs = [
  {
    id: 'seo-specialist',
    title: 'SEO Specialist',
    type: 'Full-Time',
    location: 'Dhaka / Remote',
    desc: 'Drive organic growth for our clients through advanced SEO strategies.',
    vision: '"Drive organic growth for our clients through advanced SEO strategies and data-driven content optimization."',
    responsibilities: [
      'Conduct keyword research and competitive analysis',
      'Optimize on-page and technical SEO for client sites',
      'Build quality backlinks and develop content strategies',
      'Track rankings and traffic using Google Analytics & Search Console'
    ],
    requirements: [
      '2+ years of SEO experience with proven results',
      'Proficiency in Ahrefs, SEMrush, and Screaming Frog',
      'Strong knowledge of Core Web Vitals and E-E-A-T',
      'Experience with WordPress and basic HTML/CSS'
    ],
    link: '#'
  },
  {
    id: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Join our team to build highly interactive, performant web applications using React and Next.js.',
    vision: '"Craft pixel-perfect, highly responsive, and accessible user interfaces that delight our clients and their users."',
    responsibilities: [
      'Develop new user-facing features using React.js and Next.js',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across web-capable devices'
    ],
    requirements: [
      '5+ years of experience with React.js',
      'Deep understanding of Next.js and Server-Side Rendering',
      'Proficiency in TypeScript and modern JavaScript',
      'Experience with Tailwind CSS and responsive design'
    ],
    link: '#'
  },
  {
    id: 'backend-nodejs-developer',
    title: 'Backend Node.js Developer',
    type: 'Full-Time',
    location: 'Dhaka, Bangladesh / Remote',
    desc: 'Design and implement scalable APIs and microservices. Experience with MongoDB and AWS required.',
    vision: '"Architect the invisible backbone of our applications, ensuring maximum speed, scalability, and security."',
    responsibilities: [
      'Design and build robust, scalable RESTful and GraphQL APIs',
      'Integrate user-facing elements developed by front-end developers with server-side logic',
      'Implement security and data protection measures',
      'Design and implement data storage solutions using MongoDB'
    ],
    requirements: [
      'Strong proficiency in Node.js and Express',
      'Experience designing RESTful and GraphQL APIs',
      'Expertise with MongoDB and database optimization',
      'Familiarity with AWS, Docker, and CI/CD pipelines'
    ],
    link: '#'
  }
];

import { Link } from 'react-router-dom';

export default function Career({ minimal = false }) {
  const [selected, setSelected] = useState(null);
  const displayJobs = minimal ? jobs.slice(0, 3) : jobs;

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
          {displayJobs.map((job, i) => (
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

        {minimal && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/career" className="btn-primary" style={{ textDecoration: 'none' }}>
              See All Openings
            </Link>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(6,8,24,0.9)',
            backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem', animation: 'modalFadeIn 0.3s ease'
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: '#0a0f25', color: '#f8fafc',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 24, width: '100%', maxWidth: 850, 
              position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
              animation: 'modalSlideUp 0.4s ease', maxHeight: '92vh', overflow: 'hidden',
              display: 'flex', flexDirection: 'column'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header (Fixed) */}
            <div style={{ padding: '2rem 2.5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: 40, height: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <span style={{ background: 'rgba(22,163,74,0.15)', color: '#4ade80', padding: '0.35rem 1rem', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {selected.type}
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {selected.location}
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.1 }}>{selected.title}</h3>
            </div>

            {/* Modal Content (Scrollable) */}
            <div style={{ padding: '2rem 2.5rem', overflowY: 'auto', flex: 1 }}>
              
              {/* Vision Section */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#4ade80' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid #4ade80' }} />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>The Vision</h4>
                </div>
                <div style={{ borderLeft: '4px solid rgba(74,222,128,0.2)', paddingLeft: '1.5rem' }}>
                  <p style={{ fontSize: '1.25rem', color: '#cbd5e1', fontStyle: 'italic', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {selected.vision}
                  </p>
                </div>
              </div>

              {/* Responsibilities & Requirements Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                {/* Responsibilities */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#4ade80' }}>
                    <Briefcase size={20} strokeWidth={2.5} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Responsibilities</h4>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selected.responsibilities.map((resp, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#4ade80', flexShrink: 0, marginTop: 8 }} />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#4ade80' }}>
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Requirements</h4>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selected.requirements.map((req, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
                        <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer (Fixed) */}
            <div style={{ padding: '1.5rem 2.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <a 
                href={selected.link} 
                onClick={e => e.preventDefault()} 
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', 
                  backgroundColor: '#16a34a', color: '#ffffff', padding: '1.1rem 2rem', 
                  borderRadius: 12, fontSize: '1rem', fontWeight: 800, textDecoration: 'none', 
                  textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.3s', 
                  boxShadow: '0 10px 15px -3px rgba(22, 163, 74, 0.4)' 
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#15803d'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#16a34a'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Apply for this Position <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
