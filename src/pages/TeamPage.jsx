import Layout from '../components/common/Layout';
import Members from '../components/Members';
import Contact from '../components/Contact';
import useSEO from '../lib/useSEO';

export default function TeamPage() {
  useSEO({
    title: 'Our Team — Meet the Experts',
    description: 'Meet the skilled professionals behind MASH Tech. Our team of developers, designers, and strategists are passionate about building outstanding digital products.',
    path: '/team',
  });
  return (
    <Layout>
      <Members />
    </Layout>
  );
}
