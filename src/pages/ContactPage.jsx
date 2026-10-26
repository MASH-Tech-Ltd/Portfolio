import Layout from '../components/common/Layout';
import Contact from '../components/Contact';
import useSEO from '../lib/useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us — Get a Free Quote',
    description: 'Get in touch with MASH Tech. We are based in Dhaka, Bangladesh. Contact us to discuss your web development, app development, or digital marketing project.',
    path: '/contact',
  });
  return (
    <Layout>
      <div style={{ padding: '4rem 0' }}>
        <Contact />
      </div>
    </Layout>
  );
}
