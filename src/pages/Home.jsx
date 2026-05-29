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

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <Navbar />
      <Hero />
      <Brands />
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
