import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <Navbar />
      <div style={{ paddingTop: '72px' }}> {/* Adjust for fixed navbar height */}
        {children}
      </div>
      <Footer />
    </div>
  );
}
