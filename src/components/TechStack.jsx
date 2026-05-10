import { useState } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaPaypal, FaGitAlt, FaGithub } from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiFlutter, SiFigma, SiTailwindcss,
  SiExpress, SiMongodb, SiFirebase, SiStripe, SiNginx,
  SiGoogleanalytics, SiGooglesearchconsole, SiGraphql,
  SiDigitalocean, SiGithubactions, SiCloudflare,
  SiPostgresql, SiPrisma, SiPostman
} from 'react-icons/si';
import {
  Globe, Cloud, CreditCard, MessageSquare,
  Search, TrendingUp, BarChart2, Link2, ShieldCheck, Server,
  Layers, Monitor, Settings, Rocket, LineChart, Database, Compass
} from 'lucide-react';

const ALL_TECHS = [
  // Frontend
  { name: 'React',          icon: <FaReact />,                  color: '#61dafb',  cat: 'frontend' },
  { name: 'Next.js',        icon: <SiNextdotjs />,              color: '#ffffff',  cat: 'frontend' },
  { name: 'TypeScript',     icon: <SiTypescript />,             color: '#3178c6',  cat: 'frontend' },
  { name: 'Flutter',        icon: <SiFlutter />,                color: '#54c5f8',  cat: 'frontend' },
  { name: 'Figma',          icon: <SiFigma />,                  color: '#f24e1e',  cat: 'frontend' },
  { name: 'Tailwind CSS',   icon: <SiTailwindcss />,            color: '#38bdf8',  cat: 'frontend' },
  // Backend
  { name: 'Node.js',        icon: <FaNodeJs />,                 color: '#68a063',  cat: 'backend'  },
  { name: 'Express',        icon: <SiExpress />,                color: '#cccccc',  cat: 'backend'  },
  { name: 'MongoDB',        icon: <SiMongodb />,                color: '#47a248',  cat: 'backend'  },
  { name: 'PostgreSQL',     icon: <SiPostgresql />,             color: '#336791',  cat: 'backend'  },
  { name: 'Prisma',         icon: <SiPrisma />,                 color: '#ffffff',  cat: 'backend'  },
  { name: 'SQL',            icon: <Database />,                 color: '#f8981d',  cat: 'backend'  },
  { name: 'Firebase',       icon: <SiFirebase />,               color: '#ffca28',  cat: 'backend'  },
  { name: 'JWT',            icon: <ShieldCheck />,              color: '#d63aff',  cat: 'backend'  },
  // { name: 'GraphQL',        icon: <SiGraphql />,                color: '#e10098',  cat: 'backend'  },
  { name: 'Postman',        icon: <SiPostman />,                color: '#FF6C37',  cat: 'backend'  },
  { name: 'Compass',        icon: <Compass />,                  color: '#47A248',  cat: 'backend'  },
  // Server & Deploy
  { name: 'Docker',         icon: <FaDocker />,                 color: '#2496ed',  cat: 'server'   },
  { name: 'Nginx',          icon: <SiNginx />,                  color: '#009900',  cat: 'server'   },
  { name: 'VPS',            icon: <Server />,                   color: '#f59e0b',  cat: 'server'   },
  { name: 'Cloudflare',     icon: <SiCloudflare />,             color: '#f48120',  cat: 'server'   },
  { name: 'DigitalOcean',   icon: <SiDigitalocean />,           color: '#0080ff',  cat: 'server'   },
  { name: 'Git',            icon: <FaGitAlt />,                 color: '#f34f29',  cat: 'server'   },
  { name: 'GitHub',         icon: <FaGithub />,                 color: '#ffffff',  cat: 'server'   },
  { name: 'CI/CD',          icon: <SiGithubactions />,          color: '#2088ff',  cat: 'server'   },
  { name: 'Hosting',        icon: <Globe />,                    color: '#06b6d4',  cat: 'server'   },
  { name: 'Cloud',          icon: <Cloud />,                    color: '#38bdf8',  cat: 'server'   },
  { name: 'Stripe',         icon: <SiStripe />,                 color: '#635bff',  cat: 'server'   },
  { name: 'PayPal',         icon: <FaPaypal />,                 color: '#009cde',  cat: 'server'   },
  { name: 'SSLCommerz',     icon: <CreditCard />,               color: '#e11d48',  cat: 'server'   },
  { name: 'Chatbot',        icon: <MessageSquare />,            color: '#8b5cf6',  cat: 'server'   },
  // SEO
  { name: 'Search Console', icon: <SiGooglesearchconsole />,    color: '#4285f4',  cat: 'seo'      },
  { name: 'Analytics',      icon: <SiGoogleanalytics />,        color: '#e37400',  cat: 'seo'      },
  { name: 'On-Page SEO',    icon: <Search />,                   color: '#10b981',  cat: 'seo'      },
  { name: 'Link Building',  icon: <Link2 />,                    color: '#06b6d4',  cat: 'seo'      },
  { name: 'Performance',    icon: <TrendingUp />,               color: '#f59e0b',  cat: 'seo'      },
  { name: 'Reporting',      icon: <BarChart2 />,                color: '#8b5cf6',  cat: 'seo'      },
];

const TABS = [
  { id: 'all',      label: 'All',          icon: <Layers size={16} />,     color: '#3b82f6' },
  { id: 'frontend', label: 'Frontend',     icon: <Monitor size={16} />,    color: '#61dafb' },
  { id: 'backend',  label: 'Backend',      icon: <Settings size={16} />,   color: '#68a063' },
  { id: 'server',   label: 'Server',       icon: <Rocket size={16} />,     color: '#f59e0b' },
  { id: 'seo',      label: 'SEO',          icon: <LineChart size={16} />,  color: '#10b981' },
];

function InfiniteMarquee({ items }) {
  // Triple items for seamless infinite loop
  const looped = [...items, ...items, ...items];
  const duration = Math.max(60, items.length * 5.5);

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', padding: '1rem 0' }}>
      {/* Edge fades */}
      <div style={{
        position:'absolute', left:0, top:0, bottom:0, width:100, zIndex:2,
        background:'linear-gradient(90deg,#060818 0%,transparent 100%)',
        pointerEvents:'none',
      }} />
      <div style={{
        position:'absolute', right:0, top:0, bottom:0, width:100, zIndex:2,
        background:'linear-gradient(270deg,#060818 0%,transparent 100%)',
        pointerEvents:'none',
      }} />

      <div
        style={{
          display:'flex', gap:'2rem',
          width:'max-content',
          animation:`marquee-rtl ${duration}s linear infinite`,
        }}
      >
        {looped.map((t, i) => (
          <div
            key={i}
            style={{
              display:'flex', flexDirection:'column',
              alignItems:'center', justifyContent:'center', gap:'.6rem',
              background:`${t.color}12`,
              border:`1px solid ${t.color}35`,
              borderRadius:16,
              padding:'1.5rem 2rem',
              minWidth:145, flexShrink:0,
              transition:'transform .3s, box-shadow .3s, border-color .3s',
              cursor:'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.06)';
              e.currentTarget.style.borderColor = `${t.color}80`;
              e.currentTarget.style.boxShadow = `0 14px 30px ${t.color}30`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = `${t.color}35`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ color:t.color, fontSize:'1.85rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
              {t.icon}
            </div>
            <span style={{ fontWeight:600, fontSize:'.76rem', color:'#cbd5e1', whiteSpace:'nowrap' }}>
              {t.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  );
}

export default function TechStack() {
  const [active, setActive] = useState('all');
  const activeTab = TABS.find(t => t.id === active);
  const filtered = active === 'all' ? ALL_TECHS : ALL_TECHS.filter(t => t.cat === active);

  return (
    <section id="tech" style={{ padding:'5rem 0', overflow:'hidden' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
          <span className="section-chip" style={{ marginBottom:16, display:'inline-flex' }}>Technology</span>
          <h2 style={{ fontSize:'clamp(1.75rem,4vw,2.75rem)', fontWeight:800, marginTop:12 }}>
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ color:'#64748b', marginTop:'.75rem' }}>
            Cutting-edge technologies we use to build powerful, scalable digital products.
          </p>
        </div>

        {/* Tab filter buttons */}
        <div style={{ display:'flex', justifyContent:'center', gap:'.6rem', flexWrap:'wrap', marginBottom:'2rem' }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '.4rem',
                padding:'.55rem 1.35rem', borderRadius:50,
                fontWeight:600, fontSize:'.875rem', cursor:'pointer',
                transition:'all .3s',
                border: active === t.id
                  ? `2px solid ${t.color}`
                  : '2px solid rgba(255,255,255,.1)',
                background: active === t.id ? `${t.color}18` : 'rgba(255,255,255,.04)',
                color: active === t.id ? t.color : '#64748b',
                boxShadow: active === t.id ? `0 0 16px ${t.color}28` : 'none',
              }}
            >
              <span style={{ display: 'flex' }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Gradient divider */}
        <div style={{
          height:2, borderRadius:2, marginBottom:'2.5rem',
          background:`linear-gradient(90deg,transparent,${activeTab.color},transparent)`,
          transition:'background .4s',
        }} />

        {/* Tech count badge */}
        <div style={{ textAlign:'center', marginBottom:'1.5rem' }}>
          <span style={{
            background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)',
            color:'#94a3b8', fontSize:'.78rem', fontWeight:600,
            padding:'.3rem .9rem', borderRadius:50,
          }}>
            {filtered.length} Technologies
          </span>
        </div>
      </div>

      {/* Full-width marquee */}
      <div key={active} style={{ animation:'fadeUp .35s ease' }}>
        <InfiniteMarquee items={filtered} />
      </div>

      {/* Dot indicators */}
      <div style={{ display:'flex', justifyContent:'center', gap:'.5rem', marginTop:'2rem' }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              width: active===t.id ? 28 : 8, height:8, borderRadius:4,
              background: active===t.id ? t.color : 'rgba(255,255,255,.15)',
              border:'none', cursor:'pointer', transition:'all .3s',
            }}
          />
        ))}
      </div>
    </section>
  );
}
