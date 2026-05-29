import Layout from '../components/common/Layout';

export default function CookiePolicy() {
  return (
    <Layout>
      <div style={{ padding: '8rem 1.5rem 5rem', maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Cookie Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          This Cookie Policy explains how MASH Tech Ltd uses cookies and similar technologies to recognize you when you visit our website.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>1. What are cookies?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>2. Why do we use cookies?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>3. How can I control cookies?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
        </p>
      </div>
    </Layout>
  );
}
