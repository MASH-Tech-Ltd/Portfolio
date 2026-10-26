import Layout from '../components/common/Layout';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import useSEO from '../lib/useSEO';

export default function ProjectsPage() {
  useSEO({
    title: 'Our Projects — Portfolio & Case Studies',
    description: 'Browse MASH Tech project portfolio. See our work in web apps, mobile apps, e-commerce, SaaS dashboards, and more — crafted for clients across Bangladesh and worldwide.',
    path: '/projects',
  });
  return (
    <Layout>
      <Projects />
    </Layout>
  );
}
