import Layout from '../components/common/Layout';
import Career from '../components/Career';
import Contact from '../components/Contact';
import useSEO from '../lib/useSEO';

export default function CareerPage() {
  useSEO({
    title: 'Careers — Join Our Team',
    description: 'Looking for exciting career opportunities? Join MASH Tech in Dhaka, Bangladesh. We are hiring talented developers, designers, and digital marketers. Apply today!',
    path: '/career',
  });
  return (
    <Layout>
      <Career />
      <Contact />
    </Layout>
  );
}
