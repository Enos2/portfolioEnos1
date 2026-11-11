/* eslint-disable no-undef */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css'
import SEO from './components/SEO'

function App() {
  // ─── LOAD PAGE FROM LOCALSTORAGE ───
  const [page, setPage] = useState(() => {
    const saved = localStorage.getItem('portfolioPage')
    return saved || 'home'
  })

  // ─── SAVE PAGE TO LOCALSTORAGE ───
  useEffect(() => {
    localStorage.setItem('portfolioPage', page)
  }, [page])

  // ─── STATE FROM ADMIN ───
  const [profile, setProfile] = useState({
    name: 'Enos Omondi Omenda',
    title: 'Software Developer',
    bio: 'Building modern web platforms end-to-end — from pixel-precise interfaces to scalable backend systems. Currently working on Narra, a video streaming platform with real-time features.',
    location: 'Nairobi, Kenya',
    email: 'enosomenda1@gmail.com',
    education: 'Computer Science, Zetech University',
    stack: 'React · Node.js · MongoDB',
    picture: '/img/Enos B.jpg',
    cv: '/Enos O. Omenda.pdf',
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
    { name: 'TypeScript', pct: 65 },
    { name: 'Python', pct: 70 },
    { name: 'React.js', pct: 65 },
    { name: 'Node.js', pct: 60 }
  ])

  const [projects, setProjects] = useState([
    {
      title: 'Narra',
      desc: 'Modern pay-per-view video streaming platform with live streaming, real-time messaging, admin moderation, and content monetization for creators. Built with React, Node.js, MongoDB, and Socket.IO.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      image: '/img/narra-sea.png',
      repo: 'https://github.com/Enos2/Narra.git',
      live: 'https://narrasea.onrender.com/'
    },
    {
      title: 'Ticket Take It',
      desc: 'Event ticketing platform with buyer, seller and admin roles, early-bird and group ticket tiers, and event management for organisers. Built with React, TypeScript, Node.js, Prisma, and PostgreSQL.',
      tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
      image: '/img/ticket-take-it.png',
      repo: 'https://github.com/Enos2/ticket-take-it.git',
      live: 'https://ticket-take-it.web.app/'
    },
    {
      title: 'Rotavo Motors',
      desc: 'Car marketplace for buying and selling vehicles, with listings, viewing bookings, auctions, and live USD to KES pricing. Built with React, Node.js, Express, MongoDB, and Tailwind CSS.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      image: '/img/rotavo-motors.png',
      status: 'In development',
      repo: 'https://github.com/Enos2/car-marketplace.git',
      live: 'https://rotavo-motors.web.app/'
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

  // ─── SEND EMAIL ───
  const sendEmail = (e) => {
    e.preventDefault()
    
    const form = document.getElementById('contactForm')
    const status = document.getElementById('formStatus')
    const btn = document.getElementById('sendBtn')
    
    status.textContent = 'Sending...'
    status.style.color = 'var(--gold)'
    btn.disabled = true
    
    emailjs.sendForm(
      'service_lz7rmxf',
      'template_uymx0ji',
      form,
      'u0mk6G3aUao4yBp4g'
    ).then(() => {
      status.textContent = 'Message sent successfully!'
      status.style.color = '#4ade80'
      form.reset()
      btn.disabled = false
    }).catch((error) => {
      status.textContent = 'Failed to send. Please try again.'
      status.style.color = '#f87171'
      btn.disabled = false
      console.error('Email error:', error.text || error)
    })
  }

  // ─── NAV LINKS ───
  const navLinks = ['home', 'about', 'skills', 'projects', 'emblem', 'contact']

  // ─── TIMELINE DATA ───
  const timeline = [
    { yr: '2024 — Present', ttl: 'Narra — Video Streaming Platform', sub: 'React · Node.js · MongoDB · Socket.IO · Render' },
    { yr: '2026 — Present', ttl: 'Ticket Take It — Event Ticketing', sub: 'React · TypeScript · Node.js · Prisma · PostgreSQL' },
    { yr: '2026 — Present', ttl: 'Rotavo Motors — Car Marketplace', sub: 'React · Node.js · Express · MongoDB · Tailwind CSS' },
    { yr: '2022 — 2024', ttl: 'Computer Science — Zetech University', sub: 'Nairobi, Kenya' }
  ]

  // ─── M-PESA FLOW (Ticket Take It) ───
  const mpesaFlow = [
    { icon: 'ti-device-mobile', ttl: 'STK Push', txt: 'The customer gets a payment prompt on their phone and enters their M-Pesa PIN.' },
    { icon: 'ti-webhook', ttl: 'Secure callback', txt: 'Safaricom reports the result to a secret-protected endpoint, validated with Zod.' },
    { icon: 'ti-shield-check', ttl: 'Verify', txt: 'The callback is never trusted alone. Every success is confirmed with an STK Query.' },
    { icon: 'ti-refresh', ttl: 'Reconcile', txt: 'A job runs every minute to catch lost callbacks and close unanswered prompts.' },
    { icon: 'ti-receipt', ttl: 'Receipts & refunds', txt: 'Confirmed payments become orders with receipts, and refunds are handled.' }
  ]

  // ─── SKILL GROUPS (what I used, and where) ───
  const skillGroups = [
    { icon: 'ti-layout-dashboard', title: 'Frontend', items: [
      { name: 'React', used: ['Narra', 'Ticket Take It', 'Rotavo'] },
      { name: 'TypeScript', used: ['Ticket Take It'] },
      { name: 'Tailwind CSS', used: ['Ticket Take It', 'Rotavo'] },
      { name: 'Zustand · TanStack Query', used: ['Ticket Take It'] },
      { name: 'React Hook Form · Zod', used: ['Ticket Take It'] }
    ]},
    { icon: 'ti-server', title: 'Backend', items: [
      { name: 'Node.js · Express', used: ['Narra', 'Ticket Take It', 'Rotavo'] },
      { name: 'REST API design', used: ['Narra', 'Ticket Take It', 'Rotavo'] },
      { name: 'Prisma ORM', used: ['Ticket Take It'] },
      { name: 'Scheduled jobs (cron)', used: ['Narra', 'Rotavo'] },
      { name: 'File uploads · Sharp', used: ['Narra', 'Rotavo'] }
    ]},
    { icon: 'ti-database', title: 'Databases', items: [
      { name: 'MongoDB · Mongoose', used: ['Narra', 'Rotavo'] },
      { name: 'PostgreSQL (Neon)', used: ['Ticket Take It'] },
      { name: 'MySQL', used: ['Library System', 'Car Rental'] }
    ]},
    { icon: 'ti-shield-lock', title: 'Auth & Security', items: [
      { name: 'JWT access and refresh tokens', used: ['Ticket Take It', 'Rotavo'] },
      { name: 'Role-based access control', used: ['Narra', 'Ticket Take It'] },
      { name: 'Helmet · Rate limiting · CORS', used: ['Ticket Take It', 'Rotavo'] },
      { name: 'Password hashing (bcrypt)', used: ['Narra', 'Ticket Take It', 'Rotavo'] }
    ]},
    { icon: 'ti-broadcast', title: 'Real-time & Media', items: [
      { name: 'Socket.IO real-time chat', used: ['Narra'] },
      { name: 'Live streaming (RTMP · HLS · FFmpeg)', used: ['Narra'] },
      { name: 'Cloudinary media storage', used: ['Narra'] },
      { name: 'QR ticket generation and scanning', used: ['Ticket Take It'] }
    ]},
    { icon: 'ti-rocket', title: 'Deploy & Quality', items: [
      { name: 'Render · Firebase Hosting', used: ['Narra', 'Ticket Take It', 'Rotavo'] },
      { name: 'Git · GitHub', used: ['All projects'] },
      { name: 'Vitest automated tests', used: ['Ticket Take It'] },
      { name: 'Pino logging · Sentry', used: ['Ticket Take It'] }
    ]}
  ]

  return (
    <div className="app-container">
      {/* ─── SEO ─── */}
      {page === 'home' && (
        <SEO 
          title="Enos Omondi Omenda - Software Developer & IT Professional"
          description="Hi, I'm Enos Omondi Omenda. I build modern web applications with React, Node.js, and MongoDB. Specializing in full-stack development, cybersecurity, and IT support."
          keywords="Enos Omenda, Software Developer, Full-Stack Developer, React, Node.js, Web Developer, Kenya, Cybersecurity, IT Support"
        />
      )}
      {page === 'about' && (
        <SEO 
          title="About Enos Omondi Omenda - Software Developer"
          description="Learn about Enos Omondi Omenda, a Software Developer with experience in full-stack web development, cybersecurity, IT support, and systems administration."
          keywords="About Enos Omenda, Software Developer, Full-Stack Developer, IT Support, Cybersecurity"
        />
      )}
      {page === 'skills' && (
        <SEO 
          title="Skills - Enos Omondi Omenda | React, Node.js, Cybersecurity"
          description="Explore the technical skills of Enos Omondi Omenda - React.js, Node.js, MongoDB, Cybersecurity, IT Support, and more."
          keywords="Enos Omenda Skills, React, Node.js, MongoDB, Cybersecurity, IT Support"
        />
      )}
      {page === 'projects' && (
        <SEO 
          title="Projects - Enos Omondi Omenda | Portfolio"
          description="Explore projects built by Enos Omondi Omenda including Narra, Ticket Take It, and Rotavo Motors."
          keywords="Enos Omenda Projects, Narra, Ticket Take It, Rotavo Motors, Full-Stack Projects"
        />
      )}
      {page === 'emblem' && (
        <SEO 
          title="The Inevia Emblem - Family Legacy | Enos Omondi Omenda"
          description="The Inevia Emblem represents strength and wisdom. Learn about the symbolism of the blue owl, red lions, sword, and shield."
          keywords="Inevia Emblem, Family Legacy, Omenda, Enos Omenda, Family Crest"
        />
      )}
      {page === 'contact' && (
        <SEO 
          title="Contact Enos Omondi Omenda - Software Developer"
          description="Get in touch with Enos Omondi Omenda for collaborations, job opportunities, or project inquiries."
          keywords="Contact Enos Omenda, Software Developer, Hire, Collaborate"
        />
      )}

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
        <div className="logo-text">
          <img src="/img/Enos Emblem.png" alt="Enos Emblem" className="logo-emblem" />
          EO<span>.</span>
        </div>
        <div className="nav-tabs">
          {navLinks.map(p => (
            <a
              key={p}
              href={`#${p}`}
              className={`nav-tab${page === p ? ' active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                setPage(p)
              }}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </a>
          ))}
        </div>
        <div className="status-dot">
          <div className="dot"></div> Open to work
        </div>
      </nav>

      {/* ─── HOME ─── */}
      {page === 'home' && (
        <section className="page">
          <div className="home-grid">
            <div className="hero-left">
              <div className="eyebrow">
                <i className="ti ti-map-pin" aria-hidden="true"></i> {profile.location}
              </div>
              <h1 className="name">
                {profile.name.replace('Omenda', '').trim()}<br/>
                <span className="gold">Omenda</span>
              </h1>
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
                <div className="stat-chip"><span className="label">Projects</span><span className="value">30+</span></div>
                <div className="stat-chip"><span className="label">Experience</span><span className="value">4 yrs</span></div>
                <div className="stat-chip"><span className="label">Commits</span><span className="value">111</span></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── ABOUT ─── */}
      {page === 'about' && (
        <section className="page">
          <div className="section-head">
            <div className="section-label">Who I am</div>
            <div className="page-title">About <span className="gold">Me</span></div>
            <div className="head-spacer" aria-hidden="true"></div>
          </div>
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
          <div className="section-head">
            <div className="section-label">What I know</div>
            <div className="page-title">My <span className="gold">Skills</span></div>
            <div className="head-spacer" aria-hidden="true"></div>
          </div>
          <p className="skills-intro">
            Every skill here comes from something I have built. The tags show where I used it.
          </p>

          {/* Core languages */}
          <div className="skills-sub">Core languages</div>
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

          {/* Featured: M-Pesa */}
          <div className="skills-sub">Featured integration</div>
          <div className="pay-feature">
            <div className="pay-head">
              <div className="pay-icon"><i className="ti ti-brand-cashapp" aria-hidden="true"></i></div>
              <div className="pay-head-text">
                <div className="pay-title">M-Pesa Daraja payments</div>
                <div className="pay-sub">Built into Ticket Take It for Daraja sandbox and production</div>
              </div>
              <span className="pay-badge">Ticket Take It</span>
            </div>
            <p className="pay-desc">
              A full mobile-money payment flow, from the STK Push prompt to verified, reconciled orders.
              Card payments are supported through Paystack.
            </p>
            <div className="pay-flow">
              {mpesaFlow.map((st, i) => (
                <div className="pay-step" key={st.ttl}>
                  <div className="pay-step-top">
                    <span className="pay-step-num">{String(i + 1).padStart(2, '0')}</span>
                    <i className={`ti ${st.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="pay-step-ttl">{st.ttl}</div>
                  <div className="pay-step-txt">{st.txt}</div>
                </div>
              ))}
            </div>
            <div className="pay-tags">
              {['Daraja API', 'STK Push', 'STK Query', 'Callbacks', 'Reconciliation', 'Paystack'].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* Skills by area */}
          <div className="skills-sub">Skills by area</div>
          <div className="skill-groups">
            {skillGroups.map(g => (
              <div className="group-card" key={g.title}>
                <div className="group-head">
                  <div className="group-icon"><i className={`ti ${g.icon}`} aria-hidden="true"></i></div>
                  <div className="group-title">{g.title}</div>
                </div>
                <ul className="group-list">
                  {g.items.map(it => (
                    <li key={it.name}>
                      <span className="group-skill">{it.name}</span>
                      <span className="group-used">
                        {it.used.map(u => <span className="used-tag" key={u}>{u}</span>)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── PROJECTS ─── */}
      {page === 'projects' && (
        <section className="page">
          <div className="section-head">
            <div className="section-label">What I've built</div>
            <div className="page-title">My <span className="gold">Projects</span></div>
            <div className="head-spacer" aria-hidden="true"></div>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="proj-card" key={i}>
                {p.image && (
                  <div className="proj-image">
                    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                    {p.status && <span className="proj-status">{p.status}</span>}
                  </div>
                )}
                <div className="proj-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <div className="proj-links">
                  <a href={p.repo} target="_blank" rel="noopener" className="proj-link">
                    <i className="ti ti-brand-github"></i> Repository
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener" className="proj-link live-link">
                      <i className="ti ti-world"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── EMBLEM PAGE ─── */}
      {page === 'emblem' && (
        <section className="page emblem-page">
          {/* Centered Title */}
          <div className="emblem-header">
            <div className="section-label" style={{ textAlign: 'center' }}>Family Legacy</div>
            <div className="page-title" style={{ textAlign: 'center' }}>The <span className="gold">Inevia</span> Emblem</div>
          </div>

          {/* Dictionary Layout: Left = Emblem, Right = Writing */}
          <div className="emblem-dictionary">
            {/* Left Column - Emblem */}
            <div className="emblem-left">
              <div className="emblem-display">
                <img src="/img/Enos Emblem.png" alt="Inevia Emblem" className="emblem-large" />
                <div className="emblem-motto">
                  <span className="motto-quote">"</span>
                  With strength and wisdom,<br />
                  <span className="gold">power is inevitable.</span>
                  <span className="motto-quote">"</span>
                </div>
              </div>
            </div>

            {/* Right Column - Writing */}
            <div className="emblem-right">
              <div className="emblem-meaning">
                <h3>The Meaning of <span className="gold">Inevia</span></h3>
                <p className="emblem-intro">
                  <strong>Inevia</strong> comes from the motto: <em>"With strength and wisdom, power is inevitable."</em>
                  The name represents the belief that true and lasting power comes from combining intelligence 
                  with strength — rather than relying on either one alone.
                </p>

                {/* Animals Section */}
                <h4><i className="ti ti-eye" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> The Blue Owl</h4>
                <p>The owl is the central symbol of the emblem. It represents:</p>
                <ul>
                  <li>Wisdom</li>
                  <li>Knowledge</li>
                  <li>Strategic thinking</li>
                  <li>Foresight</li>
                  <li>Leadership through intelligence</li>
                </ul>
                <p>
                  The <strong>blue color</strong> symbolizes loyalty, trust, stability, and truth. 
                  The owl occupies the highest position because wisdom guides all other forms of power.
                </p>

                <h4><i className="ti ti-crown" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> Two Red Lions</h4>
                <p>The lions represent:</p>
                <ul>
                  <li>Courage</li>
                  <li>Strength</li>
                  <li>Authority</li>
                  <li>Protection</li>
                  <li>Determination</li>
                </ul>
                <p>
                  Having <strong>two lions</strong> symbolizes balance: strength paired with wisdom, 
                  defense of family and values, and guardianship of the legacy.
                </p>
                <p>
                  The <strong>red color</strong> symbolizes valor, sacrifice, passion, and fearlessness.
                </p>

                {/* Tools Section */}
                <h4><i className="ti ti-sword" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> The Sword</h4>
                <p>
                  The sword represents justice, readiness, honor, and the ability to defend what is right. 
                  It is placed above the owl because <strong>wisdom should direct power and force</strong>.
                </p>
                <p>
                  The sword means: <em>"Power exists, but it is controlled by wisdom."</em>
                </p>

                <h4><i className="ti ti-shield" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> The Black Shield</h4>
                <p>
                  The shield represents protection, family legacy, endurance, and resilience. 
                  The <strong>black color</strong> symbolizes strength under adversity, discipline, resolve, and dignity.
                </p>
                <p>
                  The shield is the foundation that the other symbols protect.
                </p>

                {/* Colors Section */}
                <h4><i className="ti ti-palette" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> The Colors</h4>
                <div className="color-grid">
                  <div className="color-item">
                    <div className="color-swatch blue"></div>
                    <span><strong>Blue</strong> — Wisdom, Truth, Loyalty, Knowledge</span>
                  </div>
                  <div className="color-item">
                    <div className="color-swatch black"></div>
                    <span><strong>Black</strong> — Strength, Endurance, Authority, Determination</span>
                  </div>
                  <div className="color-item">
                    <div className="color-swatch red"></div>
                    <span><strong>Red</strong> — Courage, Sacrifice, Valor, Action</span>
                  </div>
                  <div className="color-item">
                    <div className="color-swatch gold"></div>
                    <span><strong>Gold</strong> — Excellence, Achievement, Honor, Prosperity</span>
                  </div>
                </div>

                {/* Banners Section */}
                <h4><i className="ti ti-flag" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> The Banners</h4>
                <p>
                  <strong>OMENDA</strong> — The family name at the top signifies heritage, ancestry, and family identity. 
                  It stands above the emblem because the family legacy guides future generations.
                </p>
                <p>
                  <strong>ENOS</strong> — Your name at the bottom signifies the current bearer of the emblem, 
                  personal responsibility for carrying the legacy forward.
                </p>

                {/* Motto Section */}
                <h4><i className="ti ti-star" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> The Motto</h4>
                <div className="motto-box">
                  <p className="motto-text">
                    "With strength and wisdom,<br />
                    <span className="gold">power is inevitable.</span>"
                  </p>
                  <p className="motto-meaning">
                    <strong>Meaning:</strong> Wisdom without strength cannot always act. 
                    Strength without wisdom often destroys itself. 
                    When both are united, success becomes difficult to stop.
                  </p>
                </div>

                {/* Complete Meaning */}
                <h4><i className="ti ti-archive" style={{ color: 'var(--gold)', marginRight: '8px' }}></i> Complete Meaning of the Emblem</h4>
                <p className="emblem-complete">
                  <strong>Inevia</strong> tells the story of a family and individual who believe that 
                  <strong>wisdom must lead strength</strong>, courage must protect knowledge, and 
                  power should be earned through discipline, honor, and understanding. 
                  The owl thinks, the lions act, the sword defends, and the shield protects — 
                  all united by the belief that <strong>"With strength and wisdom, power is inevitable."</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── CONTACT ─── */}
      {page === 'contact' && (
        <section className="page">
          <div className="section-head">
            <div className="section-label">Get in touch</div>
            <div className="page-title">Contact <span className="gold">Me</span></div>
            <div className="head-spacer" aria-hidden="true"></div>
          </div>
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
            <form className="form-grid" id="contactForm" onSubmit={sendEmail}>
              <div className="input-row">
                <input className="field" type="text" name="name" placeholder="Your name" required/>
                <input className="field" type="email" name="email" placeholder="Email address" required/>
              </div>
              <input className="field" type="text" name="subject" placeholder="Subject" required/>
              <textarea className="field" name="message" placeholder="Your message..." rows={5} required></textarea>
              <button type="submit" className="btn-gold" style={{alignSelf:'flex-start',padding:'12px 28px'}} id="sendBtn">
                <i className="ti ti-send"></i> Send Message
              </button>
              <div id="formStatus" style={{color:'var(--gold)', fontSize:'14px', marginTop:'8px'}}></div>
            </form>
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