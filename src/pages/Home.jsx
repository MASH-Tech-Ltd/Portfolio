import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Projects from '../components/Projects';
import Members from '../components/Members';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import useSEO from '../lib/useSEO';

export default function Home() {
  useSEO({
    title: 'Web & App Development Agency in Dhaka',
    description: 'MASH Tech Ltd is a leading digital agency in Dhaka, Bangladesh. We build high-performance websites, mobile apps, SaaS platforms, UI/UX design, and SEO solutions for businesses of all sizes.',
    path: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'MASH Tech Ltd — Home',
      url: 'https://mashtech.masheco.tech/',
      description: 'Leading digital agency in Dhaka providing web development, app development, SEO, and cloud solutions.',
    }
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <Navbar />
      <Hero />
      {/* <Brands /> */}
      <Services minimal={true} />
      <TechStack />
      <About minimal={true} />
      <Projects minimal={true} />
      <Career minimal={true} />
      <Members minimal={true} />
      <Testimonials minimal={true} />
      <Contact />
      <Footer />
    </div>
  );
}
