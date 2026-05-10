import Layout from '../components/common/Layout';

export default function TermsOfService() {
  return (
    <Layout>
      <div style={{ padding: '8rem 1.5rem 5rem', maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Terms of Service</h1>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Welcome to MASH Tech Ltd. By accessing our website, you agree to follow and be bound by the following terms and conditions of use.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>1. Acceptance of Terms</h2>
        <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.6 }}>
          The services that MASH Tech Ltd provides to you are subject to the following Terms of Use. MASH Tech Ltd reserves the right to update the TOU at any time without notice to you.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>2. Description of Services</h2>
        <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.6 }}>
          MASH Tech Ltd provides you with access to a variety of resources, including developer tools, download areas, communication forums and product information.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>3. User Conduct</h2>
        <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.6 }}>
          As a condition of your use of the Services, you will not use the Services for any purpose that is unlawful or prohibited by these terms, conditions, and notices.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem' }}>4. Limitation of Liability</h2>
        <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.6 }}>
          In no event shall MASH Tech Ltd and/or its respective suppliers be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits.
        </p>
      </div>
    </Layout>
  );
}
