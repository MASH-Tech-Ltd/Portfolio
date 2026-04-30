import { FaGoogle, FaHtml5, FaMicrosoft } from 'react-icons/fa';
import { SiSlack, SiStripe, SiAdobe } from 'react-icons/si';

const brands = [
  { name: 'Slack',     icon: <SiSlack /> },
  { name: 'Google',   icon: <FaGoogle /> },
  { name: 'HTML5',    icon: <FaHtml5 /> },
  { name: 'Stripe',   icon: <SiStripe /> },
  { name: 'Adobe',    icon: <SiAdobe /> },
  { name: 'Microsoft',icon: <FaMicrosoft /> },
];

export default function Brands() {
  return (
    <section style={{ padding: '2.5rem 0', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <p style={{ textAlign: 'center', color: '#475569', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Trusted by leading companies worldwide
        </p>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', alignItems: 'center', gap: '2.5rem'
        }}>
          {brands.map((b) => (
            <div key={b.name} className="brand-item">
              <span style={{ fontSize: '1.3rem' }}>{b.icon}</span>
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
