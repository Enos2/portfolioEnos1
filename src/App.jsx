/* eslint-disable no-undef */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  // ─── STATE FROM ADMIN ───
  const [profile, setProfile] = useState({
    name: 'Enos Omondi Omenda',
    title: 'Full-Stack Developer',
    bio: 'Building modern web platforms end-to-end — from pixel-precise interfaces to scalable backend systems. Currently working on Narra, a video streaming platform with real-time features.',
    location: 'Nairobi, Kenya',
    email: 'enosomenda1@gmail.com',
    education: 'Computer Science, Zetech University',
    stack: 'React · Node.js · MongoDB',
    picture: '/emojis/developer.jpg',
    cv: '/Omenda Enos.pdf',
    github: 'https://github.com/Enos2',
    twitter: '#',
    linkedin: '#',
    phone: '+254 799 875 830',
    aboutText: 'Software developer building full-stack web applications — authentication systems, responsive interfaces, REST APIs, and real-time features. Experienced in deployment and debugging across the full lifecycle of a product.'
  })

  const [skills, setSkills] = useState([
    { name: 'HTML / CSS', pct: 90 },
    { name: 'Java', pct: 87 },
    { name: 'JavaScript', pct: 70 },
    { name: 'Python', pct: 70 },
    { name: 'React.js', pct: 65 },
    { name: 'Node.js', pct: 60 }
  ])

  const [projects, setProjects] = useState([
    {
      title: 'Narra',
      desc: 'Video streaming platform with pay-per-view, live streaming, real-time messaging, and a full admin moderation system.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      href: 'https://github.com/Enos2/Narra'
    },
    {
      title: 'Car Rental System',
      desc: 'Car rental management platform with booking features, vehicle listings, and a full admin management interface.',
      tags: ['PHP', 'Laravel', 'MySQL'],
      href: 'https://github.com/Enos2/car-rent'
    },
    {
      title: 'Library Management',
      desc: 'System for tracking books, members, borrowing history, and library inventory with clean reporting.',
      tags: ['PHP', 'MySQL'],
      href: 'https://github.com/Enos2/library-mng-system'
    }
  ])

  const [messages, setMessages] = useState([])

  // ─── LOAD DATA FROM LOCALSTORAGE ───
  useEffect(() => {
    const saved = localStorage.getItem('portfolioData')
    if (saved) {
      const data = JSON.parse(saved)
      if (data.profile) setProfile(prev => ({ ...prev, ...data.profile }))
      if (data.skills) setSkills(data.skills)
      if (data.projects) setProjects(data.projects)
      if (data.messages) setMessages(data.messages)
    }
  }, [])

  // ─── LISTEN FOR CHANGES ───
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('portfolioData')
      if (saved) {
        const data = JSON.parse(saved)
        if (data.profile) setProfile(prev => ({ ...prev, ...data.profile }))
        if (data.skills) setSkills(data.skills)
        if (data.projects) setProjects(data.projects)
        if (data.messages) setMessages(data.messages)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // ─── TIMELINE DATA ───
  const timeline = [
    { yr: '2024 — Present', ttl: 'Narra — Video Streaming Platform', sub: 'React · Node.js · MongoDB · Socket.IO · Render' },
    { yr: '2023', ttl: 'Car Rental & Library Management Systems', sub: 'PHP · Laravel · MySQL' },
    { yr: '2022 — 2024', ttl: 'Computer Science — Zetech University', sub: 'Nairobi, Kenya' }
  ]

  // ─── TECH CHIPS ───
  const techChips = ['Express.js', 'MongoDB', 'Socket.IO', 'Firebase', 'REST APIs', 'Git / GitHub', 'PHP / Laravel', 'MySQL', 'Render', 'Vite']

  return (
    <div id="root">
      {/* Animated SVG background */}
      <div className="bg-anim" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="20%" cy="30%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="#000" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="g2" cx="80%" cy="70%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite"/>
          </rect>
          <rect width="100%" height="100%" fill="url(#g2)">
            <animate attributeName="opacity" values="1;0.5;1" dur="9s" repeatCount="indefinite"/>
          </rect>
          {Array.from({length: 12}).map((_, i) => (
            <line key={`v${i}`} x1={`${(i+1)*8.33}%`} y1="0" x2={`${(i+1)*8.33}%`} y2="100%" stroke="#FFD700" strokeOpacity="0.03" strokeWidth="1"/>
          ))}
          {Array.from({length: 8}).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${(i+1)*12.5}%`} x2="100%" y2={`${(i+1)*12.5}%`} stroke="#FFD700" strokeOpacity="0.03" strokeWidth="1"/>
          ))}
        </svg>
      </div>
      <div className="grain" aria-hidden="true"></div>

      {/* ─── NAV ─── */}
      <nav>
        <div className="logo-text">EO<span>.</span></div>
        <div className="nav-tabs">
          {['home','about','skills','projects','contact'].map(p => (
            <button key={p} className={`nav-tab${page===p?' active':''}`} onClick={()=>setPage(p)}>
              {p.charAt(0).toUpperCase()+p.slice(1)}
            </button>
          ))}
        </div>
        <div className="status-dot"><div className="dot"></div> Open to work</div>
      </nav>

      {/* ─── HOME ─── */}
      {page === 'home' && (
        <section className="page">
          <div className="home-grid">
            <div className="hero-left">
              <div className="eyebrow">
                <i className="ti ti-map-pin" aria-hidden="true"></i> {profile.location}
              </div>
              <h1 className="name">{profile.name}<br/><span className="gold">Omenda</span></h1>
              <div className="role-line">// <span>{profile.title}</span> · React · Node.js · MongoDB</div>
              <p className="bio">{profile.bio}</p>
              <div className="cta-row">
                <a href={profile.cv} download className="btn-gold">
                  <i className="ti ti-download" aria-hidden="true"></i> Download CV
                </a>
                <button className="btn-outline" onClick={()=>setPage('contact')}>
                  <i className="ti ti-send" aria-hidden="true"></i> Contact Me
                </button>
              </div>
              <div className="links-row">
                <a href={profile.github} target="_blank" rel="noopener" className="link-pill">
                  <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
                </a>
                <a href={profile.twitter} className="link-pill">
                  <i className="ti ti-brand-twitter" aria-hidden="true"></i> Twitter
                </a>
                <a href={profile.linkedin} className="link-pill">
                  <i className="ti ti-brand-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-right">
              <div className="profile-circle">
                <img src={profile.picture} alt={profile.name} className="profile-img"/>
              </div>
              <div className="stat-chips">
                <div className="stat-chip"><span className="label">Projects</span><span className="value">{projects.length}+</span></div>
                <div className="stat-chip"><span className="label">Experience</span><span className="value">2 yrs</span></div>
                <div className="stat-chip"><span className="label">Commits</span><span className="value">111</span></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── ABOUT ─── */}
      {page === 'about' && (
        <section className="page">
          <div className="section-label">Who I am</div>
          <div className="page-title">About <span className="gold">Me</span></div>
          <div className="about-layout">
            <div>
              <div className="card" style={{marginBottom:'16px'}}>
                <div className="info-row">
                  <div className="icon-sq"><i className="ti ti-map-pin"></i></div>
                  <div><div className="lbl">Location</div><div className="val">{profile.location}</div></div>
                </div>
                <div className="info-row">
                  <div className="icon-sq"><i className="ti ti-mail"></i></div>
                  <div><div className="lbl">Email</div><div className="val">{profile.email}</div></div>
                </div>
                <div className="info-row">
                  <div className="icon-sq"><i className="ti ti-school"></i></div>
                  <div><div className="lbl">Education</div><div className="val">{profile.education}</div></div>
                </div>
                <div className="info-row">
                  <div className="icon-sq"><i className="ti ti-device-laptop"></i></div>
                  <div><div className="lbl">Stack</div><div className="val">{profile.stack}</div></div>
                </div>
              </div>
              <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:'1.9'}}>
                {profile.aboutText}
              </p>
            </div>
            <div>
              <div className="section-label" style={{marginBottom:'16px'}}>Timeline</div>
              <div className="timeline">
                {timeline.map((t, i) => (
                  <div className="tl-item" key={i}>
                    <div className="tl-line"><div className="tl-dot"></div><div className="tl-seg"></div></div>
                    <div className="tl-body">
                      <div className="yr">{t.yr}</div>
                      <div className="ttl">{t.ttl}</div>
                      <div className="sub">{t.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── SKILLS ─── */}
      {page === 'skills' && (
        <section className="page">
          <div className="section-label">What I know</div>
          <div className="page-title">My <span className="gold">Skills</span></div>
          <div className="skills-grid">
            {skills.map(s => (
              <div className="skill-card" key={s.name}>
                <div className="skill-top">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.pct}%</span>
                </div>
                <div className="track"><div className="fill" style={{width:`${s.pct}%`}}></div></div>
              </div>
            ))}
          </div>
          <div className="tech-chips">
            {techChips.map(t => (
              <div className="tech-chip" key={t}>{t}</div>
            ))}
          </div>
        </section>
      )}

      {/* ─── PROJECTS ─── */}
      {page === 'projects' && (
        <section className="page">
          <div className="section-label">What I've built</div>
          <div className="page-title">My <span className="gold">Projects</span></div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="proj-card" key={i}>
                <div className="proj-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <a href={p.href} target="_blank" rel="noopener" className="proj-link">
                  <i className="ti ti-brand-github"></i> View on GitHub <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── CONTACT ─── */}
      {page === 'contact' && (
        <section className="page">
          <div className="section-label">Get in touch</div>
          <div className="page-title">Contact <span className="gold">Me</span></div>
          <div className="contact-layout">
            <div>
              <div className="contact-card">
                {[
                  {icon:'ti-mail',lbl:'Email',val:profile.email},
                  {icon:'ti-phone',lbl:'Phone',val:profile.phone},
                  {icon:'ti-map-pin',lbl:'Location',val:profile.location},
                ].map(c => (
                  <div className="contact-item" key={c.lbl}>
                    <div className="contact-icon"><i className={`ti ${c.icon}`}></i></div>
                    <div><div className="contact-lbl">{c.lbl}</div><div className="contact-val">{c.val}</div></div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:'10px',marginTop:'14px',flexWrap:'wrap'}}>
                <a href={profile.github} target="_blank" rel="noopener" className="btn-outline" style={{fontSize:'13px',padding:'9px 16px'}}>
                  <i className="ti ti-brand-github"></i> GitHub
                </a>
                <a href={profile.twitter} className="btn-outline" style={{fontSize:'13px',padding:'9px 16px'}}>
                  <i className="ti ti-brand-twitter"></i> Twitter
                </a>
                <a href={profile.linkedin} className="btn-outline" style={{fontSize:'13px',padding:'9px 16px'}}>
                  <i className="ti ti-brand-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
            <div className="form-grid">
              <div className="input-row">
                <input className="field" type="text" placeholder="Your name"/>
                <input className="field" type="email" placeholder="Email address"/>
              </div>
              <input className="field" type="text" placeholder="Subject"/>
              <textarea className="field" placeholder="Your message..." rows={5}></textarea>
              <button className="btn-gold" style={{alignSelf:'flex-start',padding:'12px 28px'}}>
                <i className="ti ti-send"></i> Send Message
              </button>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <p>© 2026 {profile.name}</p>
      </footer>
    </div>
  )
}

export default App