import Layout from '../components/common/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div style={{ padding: '8rem 1.5rem 5rem', maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          At MASH Tech Ltd, we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by MASH Tech Ltd.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>1. Information We Collect</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          We collect information from you when you visit our site, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>2. How We Use Your Information</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          Any of the information we collect from you may be used in one of the following ways:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.6 }}>
          <li>To personalize your experience</li>
          <li>To improve our website</li>
          <li>To improve customer service</li>
          <li>To process transactions</li>
          <li>To send periodic emails</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>3. Protection of Information</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>4. Contact Us</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
          If there are any questions regarding this privacy policy, you may contact us using the information below:
          <br /><br />
          Email: contact@mashtech.com
        </p>
      </div>
    </Layout>
  );
}
