import { ArrowRight, Play, Search, TrendingUp, Target, Lightbulb, Star, Rocket } from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiCloudflare, SiDigitalocean, SiGoogleanalytics, SiGooglesearchconsole, SiFlutter } from 'react-icons/si';

const benefits = [
  { icon: <Target size={28} color="#ec4899" />, title: 'Branding Solutions', sub: 'Build your identity' },
  { icon: <Lightbulb size={28} color="#f59e0b" />, title: 'Gain Wisdom', sub: 'Expert guidance' },
  { icon: <Star size={28} color="#3b82f6" />, title: 'More Professional', sub: 'Premium quality' },
  { icon: <Rocket size={28} color="#ef4444" />, title: 'Fast Delivery', sub: 'On-time results' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg"
      style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 40, position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative Galaxy Orbits */}
      
      {/* Circle 4 - Deploy (600x600) */}
      <div style={{
        position: 'absolute', top: 70, right: '-2%', width: 600, height: 600,
        borderRadius: '50%', border: '1px solid rgba(59,130,246,.08)',
        pointerEvents: 'none'
      }} className="spin-60">
        <div className="spin-60-reverse glass-card" style={{ position: 'absolute', top: -24, left: 276, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0080ff' }}>
          <SiDigitalocean size={24} />
        </div>
        <div className="spin-60-reverse glass-card" style={{ position: 'absolute', bottom: -24, left: 276, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f48120' }}>
          <SiCloudflare size={24} />
        </div>
        <div className="spin-60-reverse glass-card" style={{ position: 'absolute', top: 276, left: -24, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2496ed' }}>
          <FaDocker size={26} />
        </div>
        <div className="spin-60-reverse glass-card" style={{ position: 'absolute', top: 276, right: -24, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
          <FaGithub size={26} />
        </div>
      </div>

      {/* Circle 3 - Frontend (480x480) */}
      <div style={{
        position: 'absolute', top: 130, right: 'calc(-2% + 60px)', width: 480, height: 480,
        borderRadius: '50%', border: '1px solid rgba(139,92,246,.12)',
        pointerEvents: 'none'
      }} className="spin-45-reverse">
        <div className="spin-45 glass-card" style={{ position: 'absolute', top: -24, left: 216, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#61dafb' }}>
          <FaReact size={26} />
        </div>
        <div className="spin-45 glass-card" style={{ position: 'absolute', top: 142, left: 444, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
          <SiNextdotjs size={24} />
        </div>
        <div className="spin-45 glass-card" style={{ position: 'absolute', top: 410, left: 357, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3178c6' }}>
          <SiTypescript size={22} />
        </div>
        <div className="spin-45 glass-card" style={{ position: 'absolute', top: 410, left: 75, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
          <SiTailwindcss size={24} />
        </div>
        <div className="spin-45 glass-card" style={{ position: 'absolute', top: 142, left: -12, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#54c5f8' }}>
          <SiFlutter size={24} />
        </div>
      </div>

      {/* Circle 2 - Backend (360x360) */}
      <div style={{
        position: 'absolute', top: 190, right: 'calc(-2% + 120px)', width: 360, height: 360,
        borderRadius: '50%', border: '1px solid rgba(16,185,129,.15)',
        pointerEvents: 'none'
      }} className="spin-30">
        <div className="spin-30-reverse glass-card" style={{ position: 'absolute', top: -24, left: 156, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#68a063' }}>
          <FaNodeJs size={26} />
        </div>
        <div className="spin-30-reverse glass-card" style={{ position: 'absolute', bottom: -24, left: 156, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#47a248' }}>
          <SiMongodb size={24} />
        </div>
        <div className="spin-30-reverse glass-card" style={{ position: 'absolute', top: 156, left: -24, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cccccc' }}>
          <SiExpress size={24} />
        </div>
        <div className="spin-30-reverse glass-card" style={{ position: 'absolute', top: 156, right: -24, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffca28' }}>
          <SiFirebase size={24} />
        </div>
      </div>

      {/* Circle 1 - SEO (240x240) */}
      <div style={{
        position: 'absolute', top: 250, right: 'calc(-2% + 180px)', width: 240, height: 240,
        borderRadius: '50%', border: '1px solid rgba(245,158,11,.15)',
        pointerEvents: 'none'
      }} className="spin-20-reverse">
        <div className="spin-20 glass-card" style={{ position: 'absolute', top: 11, left: 11, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4285f4' }}>
          <SiGooglesearchconsole size={22} />
        </div>
        <div className="spin-20 glass-card" style={{ position: 'absolute', top: 11, right: 11, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e37400' }}>
          <SiGoogleanalytics size={22} />
        </div>
        <div className="spin-20 glass-card" style={{ position: 'absolute', bottom: 11, left: 11, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
          <Search size={22} />
        </div>
        <div className="spin-20 glass-card" style={{ position: 'absolute', bottom: 11, right: 11, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
          <TrendingUp size={22} />
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span className="section-chip">✦ MASH Tech Ltd — Your Digital Partner</span>
        </div>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          {/* Left */}
          <div className="fade-up">
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Smart Choices<br />
              <span className="gradient-text">For Your Business</span><br />
              Growth
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 480 }}>
              We help businesses grow and succeed in the digital age. From stunning websites
              to powerful mobile apps — we deliver solutions that exceed expectations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-outline" style={{ textDecoration: 'none' }}>
                <Play size={16} /> View Work
              </a>
            </div>
          </div>

          {/* Right – hero image */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <img
              src="/hero.png"
              alt="Digital business solutions"
              className="float-anim"
              style={{ width: '100%', maxWidth: 520, objectFit: 'contain', filter: 'drop-shadow(0 30px 60px rgba(59,130,246,.35))' }}
            />
          </div>
        </div>

        {/* Benefit cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {b.icon}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '.95rem', marginBottom: 2 }}>{b.title}</p>
                <p style={{ color: '#64748b', fontSize: '.8rem' }}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
