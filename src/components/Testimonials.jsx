const reviews = [
  { name: 'Sarah Johnson', role: 'CEO', company: 'TechStart Inc.', rating: 5, initials: 'SJ',
    text: 'MASH Tech transformed our online presence completely. The website they built exceeded all our expectations — beautiful, fast, and our conversions went up 3x!' },
  { name: 'Michael Chen', role: 'Founder', company: 'GrowthLab', rating: 5, initials: 'MC',
    text: 'Working with MASH Tech was a fantastic experience. Their team is professional, communicative, and delivered our mobile app on time with excellent quality.' },
  { name: 'Aisha Rahman', role: 'Marketing Director', company: 'Nova Brands', rating: 5, initials: 'AR',
    text: 'Outstanding service! They understood our vision perfectly and delivered a web solution that truly represents our brand. Highly recommended!' },
  { name: 'David Park', role: 'CTO', company: 'DataFlow', rating: 5, initials: 'DP',
    text: 'The SaaS dashboard they built is incredible. Clean code, great performance, and they were proactive in suggesting improvements throughout the project.' },
  { name: 'Fatima Al-Sayed', role: 'Operations Manager', company: 'LogiTech', rating: 5, initials: 'FA',
    text: 'We needed a complete e-commerce overhaul and MASH Tech delivered beyond expectations. The new platform is smooth, intuitive, and our sales have grown.' },
  { name: 'James Williams', role: 'Product Manager', company: 'AppForge', rating: 5, initials: 'JW',
    text: 'Exceptional app development team. They handled complex requirements with ease and maintained clear communication throughout. Will definitely work with them again.' },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: '.75rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-alt" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-chip" style={{ marginBottom: 16, display: 'inline-flex' }}>Testimonials</span>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 800, marginTop: 12 }}>
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p style={{ color: '#64748b', marginTop: '1rem' }}>
            Real feedback from real clients who trusted us with their digital journey.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <Stars count={r.rating} />
              <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '.9rem', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.875rem' }}>
                <div className="avatar-placeholder">{r.initials}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '.95rem' }}>{r.name}</p>
                  <p style={{ color: '#475569', fontSize: '.8rem' }}>{r.role} · {r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
