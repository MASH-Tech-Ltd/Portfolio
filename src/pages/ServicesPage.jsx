import Layout from '../components/common/Layout';
import Services from '../components/Services';
import Contact from '../components/Contact';
import useSEO from '../lib/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Our Services — Web, App, SEO & Cloud',
    description: 'Explore MASH Tech full range of services: web app development, mobile app development, UI/UX design, SEO optimization, backend development, and cloud & DevOps solutions.',
    path: '/services',
  });
  return (
    <Layout>
      <Services />
      <Contact />
    </Layout>
  );
}
