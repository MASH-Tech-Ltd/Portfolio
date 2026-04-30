import { useState } from 'react';
import { LayoutDashboard, FolderKanban, Users, Briefcase, Settings, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'projects', label: 'Manage Projects', icon: <FolderKanban size={20} /> },
    { id: 'services', label: 'Manage Services', icon: <Settings size={20} /> },
    { id: 'team', label: 'Manage Team', icon: <Users size={20} /> },
    { id: 'careers', label: 'Manage Careers', icon: <Briefcase size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', color: '#f8fafc' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, background: '#1e293b', borderRight: '1px solid #334155', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>M</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Admin Panel</h2>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem',
                background: activeTab === tab.id ? 'rgba(59,130,246,0.15)' : 'transparent',
                color: activeTab === tab.id ? '#60a5fa' : '#cbd5e1',
                border: 'none', borderRadius: 8, cursor: 'pointer', textAlign: 'left',
                fontSize: '0.95rem', fontWeight: 600, transition: 'all 0.2s'
              }}
              onMouseEnter={e => { if(activeTab !== tab.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { if(activeTab !== tab.id) e.currentTarget.style.background = 'transparent' }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <button style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'transparent', color: '#ef4444', border: 'none', borderRadius: 8, cursor: 'pointer', textAlign: 'left', fontSize: '0.95rem', fontWeight: 600, marginTop: 'auto' }}>
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #334155' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            {tabs.find(t => t.id === activeTab)?.label}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Admin User</span>
            <div style={{ width: 36, height: 36, background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div style={{ background: '#1e293b', padding: '2rem', borderRadius: 12, border: '1px solid #334155', minHeight: 400 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <p style={{ color: '#94a3b8' }}>
              Manage your portfolio data here. This section will be connected to the Node.js/MongoDB backend.
            </p>
            {activeTab !== 'dashboard' && (
              <button style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>
                + Add New
              </button>
            )}
          </div>
          
          {activeTab === 'dashboard' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {['Total Projects: 12', 'Active Services: 6', 'Team Members: 6', 'Open Roles: 3'].map((stat, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12 }}>
                  <h3 style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>{stat.split(':')[0]}</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 800, color: '#3b82f6', marginTop: '0.5rem' }}>{stat.split(':')[1]}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div style={{ width: '100%', height: 300, border: '2px dashed #334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', flexDirection: 'column', gap: '1rem' }}>
              <span>Data table for {activeTab} will render here.</span>
              <span>Connect MongoDB to fetch and edit data.</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
