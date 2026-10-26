import Layout from '../components/common/Layout';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import useSEO from '../lib/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About Us — Our Story & Team',
    description: 'Learn about MASH Tech — a passionate digital agency in Dhaka, Bangladesh. Discover our story, mission, values, and the talented team behind our success.',
    path: '/about',
  });
  return (
    <Layout>
      <About />
      <TechStack />
      <Testimonials />
    </Layout>
  );
}
