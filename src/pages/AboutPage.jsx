import Layout from '../components/common/Layout';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  return (
    <Layout>
      <About />
      <TechStack />
      <Testimonials />
    </Layout>
  );
}
