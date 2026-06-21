/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Admin.css'

/* ─── ICON SYSTEM ───
   Single-stroke line icons, no emoji anywhere in this file. */
function Icon({ name, size = 18, className = '' }) {
  const paths = {
    profile: <><circle cx="12" cy="8.2" r="3.4" /><path d="M4.8 19.5c1.4-4.1 3.9-5.8 7.2-5.8s5.8 1.7 7.2 5.8" /></>,
    skills: <><path d="M5 19V11" /><path d="M12 19V5" /><path d="M19 19v-7" /></>,
    projects: <><path d="M3.5 7.2h5.4l1.8 2H20v9.6a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V7.2z" /></>,
    contact: <><path d="M6.2 3.5h2.7l1.8 4.4-2.2 1.3a10 10 0 0 0 4.5 4.5l1.3-2.2 4.4 1.8v2.7a1.8 1.8 0 0 1-1.9 1.8C10.7 17.4 6.6 13.3 6.2 7.3a1.8 1.8 0 0 1 1.7-1.9z" /></>,
    messages: <><rect x="3.5" y="5" width="17" height="12.5" rx="2" /><path d="M6.5 9h11M6.5 12.2h6.5" /></>,
    save: <><circle cx="12" cy="12" r="8.5" /><path d="M8.3 12.3l2.5 2.5 5-5.4" /></>,
    logout: <><path d="M9.5 4.5H6a1.3 1.3 0 0 0-1.3 1.3v12.4A1.3 1.3 0 0 0 6 19.5h3.5" /><path d="M14.5 8l4 4-4 4" /><path d="M18.3 12H9.8" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    trash: <><path d="M4.5 7h15" /><path d="M9.3 7V4.2h5.4V7" /><path d="M6.3 7l1 13h9.4l1-13" /></>,
    image: <><rect x="3.2" y="4.5" width="17.6" height="15" rx="2" /><circle cx="8.4" cy="9.4" r="1.5" /><path d="M21 16l-5.2-5-4.6 4.4-2.7-2.6L4 17" /></>,
    file: <><path d="M7.2 3h6.8l4 4v14H7.2V3z" /><path d="M14 3v4h4" /></>,
    pin: <><path d="M12 21s-6.6-7.1-6.6-11.6a6.6 6.6 0 1 1 13.2 0C18.6 13.9 12 21 12 21z" /><circle cx="12" cy="9.3" r="2.3" /></>,
    link: <><path d="M9.2 14.8l5.6-5.6" /><path d="M10.4 6.6l.9-.9a3.8 3.8 0 0 1 5.4 5.4l-1 .9" /><path d="M13.6 17.4l-.9.9a3.8 3.8 0 0 1-5.4-5.4l1-.9" /></>,
    inbox: <><path d="M3.5 12l2.7-7.5h11.6l2.7 7.5" /><path d="M3.5 12v5.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12" /><path d="M3.5 12h5l1.3 2.3h4.4L15.5 12h5" /></>,
    education: <><path d="M3 9.3L12 5l9 4.3-9 4.3-9-4.3z" /><path d="M7 11.2V16c0 1.1 2.2 2 5 2s5-.9 5-2v-4.8" /><path d="M20 9.3V15" /></>,
    stack: <><path d="M12 3.5l8 4-8 4-8-4 8-4z" /><path d="M4 11.3l8 4 8-4" /><path d="M4 15.3l8 4 8-4" /></>,
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/* Shows which part of the live site a section feeds. */
function FeedsTag({ children, variant = 'live' }) {
  return (
    <span className={`feeds-tag ${variant}`}>
      <Icon name={variant === 'live' ? 'link' : 'inbox'} size={11} />
      {children}
    </span>
  )
}

const TABS = [
  { id: 'profile', label: 'Profile', icon: 'profile' },
  { id: 'skills', label: 'Skills', icon: 'skills' },
  { id: 'projects', label: 'Work', icon: 'projects' },
  { id: 'contact', label: 'Contact', icon: 'contact' },
  { id: 'messages', label: 'Messages', icon: 'messages' },
]

function Admin({ onLogout }) {
  const [activeTab, setActiveTab] = useState('profile')
  const [profile, setProfile] = useState({
    name: 'Enos Omondi Omenda',
    title: 'Full-Stack Developer',
    bio: 'Building modern web platforms end-to-end — from pixel-precise interfaces to scalable backend systems.',
    location: 'Nairobi, Kenya',
    email: 'enosomenda1@gmail.com',
    education: 'Computer Science, Zetech University',
    stack: 'React · Node.js · MongoDB',
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
    { title: 'Narra', desc: 'Video streaming platform with pay-per-view, live streaming, real-time messaging, and a full admin moderation system.', tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'], href: 'https://github.com/Enos2/Narra' },
    { title: 'Car Rental System', desc: 'Car rental management platform with booking features, vehicle listings, and a full admin management interface.', tags: ['PHP', 'Laravel', 'MySQL'], href: 'https://github.com/Enos2/car-rent' },
    { title: 'Library Management', desc: 'System for tracking books, members, borrowing history, and library inventory with clean reporting.', tags: ['PHP', 'MySQL'], href: 'https://github.com/Enos2/library-mng-system' }
  ])
  const [messages, setMessages] = useState([])
  const [newSkill, setNewSkill] = useState({ name: '', pct: 50 })
  const [newProject, setNewProject] = useState({ title: '', desc: '', tags: '', href: '' })
  const [saveMsg, setSaveMsg] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('portfolioData')
    if (saved) {
      const data = JSON.parse(saved)
      setProfile(prev => ({ ...prev, ...(data.profile || {}) }))
      setSkills(data.skills || skills)
      setProjects(data.projects || projects)
      setMessages(data.messages || [])
    }
  }, [])

  const saveData = () => {
    const data = { profile, skills, projects, messages }
    localStorage.setItem('portfolioData', JSON.stringify(data))
    setSaveMsg('Saved — live site updated')
    setTimeout(() => setSaveMsg(''), 3000)
  }

  const addSkill = () => {
    if (!newSkill.name) return
    setSkills([...skills, { name: newSkill.name, pct: newSkill.pct }])
    setNewSkill({ name: '', pct: 50 })
  }

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  const addProject = () => {
    if (!newProject.title) return
    const tags = newProject.tags.split(',').map(t => t.trim()).filter(Boolean)
    setProjects([...projects, {
      title: newProject.title,
      desc: newProject.desc,
      tags,
      href: newProject.href
    }])
    setNewProject({ title: '', desc: '', tags: '', href: '' })
  }

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  const deleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index))
  }

  return (
    <div className="admin-container">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-brand">
          <div className="logo-text">EO<span>.</span></div>
          <span className="brand-tag">Admin Console</span>
        </div>
        <div className="admin-actions">
          <div className="live-indicator"><span className="pulse-dot" />Live</div>
          {saveMsg && <span className="save-msg">{saveMsg}</span>}
          <button onClick={saveData} className="btn-save">
            <Icon name="save" size={16} />
            Save changes
          </button>
          <button onClick={onLogout} className="btn-logout">
            <Icon name="logout" size={16} />
            Log out
          </button>
        </div>
      </header>

      <div className="admin-body">
        {/* Sidebar */}
        <nav className="admin-sidebar">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon name={tab.icon} size={17} />
              <span>{tab.label}</span>
              {tab.id === 'messages' && messages.length > 0 && (
                <span className="badge">{messages.length}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="admin-content">
          {/* ─── PROFILE ─── */}
          {activeTab === 'profile' && (
            <section className="admin-section">
              <div className="section-head">
                <div>
                  <h2>Profile</h2>
                  <p className="admin-desc">How you're presented across the site</p>
                </div>
              </div>

              <div className="admin-card">
                <div className="card-head">
                  <span className="card-label">Identity</span>
                  <FeedsTag>Home page</FeedsTag>
                </div>
                <div className="admin-form">
                  <div className="form-group">
                    <label><Icon name="profile" size={14} />Full name</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={e => setProfile({ ...profile, name: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="projects" size={14} />Title / role</label>
                    <input
                      type="text"
                      value={profile.title}
                      onChange={e => setProfile({ ...profile, title: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="messages" size={14} />Bio / tagline</label>
                    <textarea
                      value={profile.bio}
                      onChange={e => setProfile({ ...profile, bio: e.target.value })}
                      className="admin-input"
                      rows="3"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="image" size={14} />Profile picture</label>
                    <input
                      type="text"
                      value={profile.picture || ''}
                      onChange={e => setProfile({ ...profile, picture: e.target.value })}
                      placeholder="Image URL, e.g. /emojis/developer.jpg"
                      className="admin-input"
                    />
                    <span className="field-hint">Upload the image to /public/emojis/ and enter its path</span>
                  </div>
                  <div className="form-group">
                    <label><Icon name="file" size={14} />CV file</label>
                    <input
                      type="text"
                      value={profile.cv || '/Omenda Enos.pdf'}
                      onChange={e => setProfile({ ...profile, cv: e.target.value })}
                      placeholder="/Omenda Enos.pdf"
                      className="admin-input"
                    />
                    <span className="field-hint">Place the PDF in the /public/ folder</span>
                  </div>
                </div>
              </div>

              <div className="admin-card">
                <div className="card-head">
                  <span className="card-label">Background</span>
                  <FeedsTag>About page</FeedsTag>
                </div>
                <div className="admin-form">
                  <div className="form-group">
                    <label><Icon name="education" size={14} />Education</label>
                    <input
                      type="text"
                      value={profile.education}
                      onChange={e => setProfile({ ...profile, education: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="stack" size={14} />Stack</label>
                    <input
                      type="text"
                      value={profile.stack}
                      onChange={e => setProfile({ ...profile, stack: e.target.value })}
                      placeholder="React · Node.js · MongoDB"
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="messages" size={14} />About text</label>
                    <textarea
                      value={profile.aboutText}
                      onChange={e => setProfile({ ...profile, aboutText: e.target.value })}
                      className="admin-input"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ─── SKILLS ─── */}
          {activeTab === 'skills' && (
            <section className="admin-section">
              <div className="section-head">
                <div>
                  <h2>Skills</h2>
                  <p className="admin-desc">Shown as proficiency bars on your site</p>
                </div>
                <FeedsTag>Skills page</FeedsTag>
              </div>

              <div className="admin-card">
                <div className="admin-form-row-3">
                  <div className="form-group">
                    <label>Skill name</label>
                    <input
                      type="text"
                      value={newSkill.name}
                      onChange={e => setNewSkill({ ...newSkill, name: e.target.value })}
                      placeholder="e.g. TypeScript"
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Level</label>
                    <input
                      type="number"
                      value={newSkill.pct}
                      onChange={e => setNewSkill({ ...newSkill, pct: parseInt(e.target.value) || 0 })}
                      min="0" max="100"
                      className="admin-input admin-input-small"
                    />
                  </div>
                  <button onClick={addSkill} className="admin-btn-add">
                    <Icon name="plus" size={16} />
                    Add
                  </button>
                </div>
              </div>

              <div className="admin-list">
                {skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-item-top">
                      <span className="item-title">{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.pct}%` }} />
                    </div>
                    <button onClick={() => removeSkill(i)} className="btn-delete" aria-label={`Remove ${skill.name}`}>
                      <Icon name="trash" size={15} />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ─── PROJECTS ─── */}
          {activeTab === 'projects' && (
            <section className="admin-section">
              <div className="section-head">
                <div>
                  <h2>Work</h2>
                  <p className="admin-desc">Projects featured on your portfolio</p>
                </div>
                <FeedsTag>Projects page</FeedsTag>
              </div>

              <div className="admin-card">
                <div className="admin-form">
                  <div className="form-group">
                    <label>Project title</label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="e.g. Narra"
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={newProject.desc}
                      onChange={e => setNewProject({ ...newProject, desc: e.target.value })}
                      placeholder="Brief project description"
                      className="admin-input"
                      rows="2"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tags, comma separated</label>
                    <input
                      type="text"
                      value={newProject.tags}
                      onChange={e => setNewProject({ ...newProject, tags: e.target.value })}
                      placeholder="React, Node.js, MongoDB"
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="link" size={14} />GitHub URL</label>
                    <input
                      type="text"
                      value={newProject.href}
                      onChange={e => setNewProject({ ...newProject, href: e.target.value })}
                      placeholder="https://github.com/username/project"
                      className="admin-input"
                    />
                  </div>
                  <button onClick={addProject} className="admin-btn-add" style={{ alignSelf: 'start' }}>
                    <Icon name="plus" size={16} />
                    Add project
                  </button>
                </div>
              </div>

              <div className="project-grid">
                {projects.map((project, i) => (
                  <div key={i} className="project-card">
                    <div className="project-card-head">
                      <span className="item-title">{project.title}</span>
                      <button onClick={() => removeProject(i)} className="btn-delete" aria-label={`Remove ${project.title}`}>
                        <Icon name="trash" size={15} />
                      </button>
                    </div>
                    <p className="project-desc">{project.desc}</p>
                    <div className="item-tags">
                      {project.tags.map(t => (
                        <span key={t} className="item-tag">{t}</span>
                      ))}
                    </div>
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
                        <Icon name="link" size={13} />
                        {project.href.replace('https://', '')}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ─── CONTACT ─── */}
          {activeTab === 'contact' && (
            <section className="admin-section">
              <div className="section-head">
                <div>
                  <h2>Contact</h2>
                  <p className="admin-desc">Where people can reach you</p>
                </div>
                <FeedsTag>Contact page</FeedsTag>
              </div>

              <div className="admin-card">
                <div className="admin-form">
                  <div className="form-group">
                    <label><Icon name="messages" size={14} />Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={e => setProfile({ ...profile, email: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="contact" size={14} />Phone</label>
                    <input
                      type="text"
                      value={profile.phone || '+254 799 875 830'}
                      onChange={e => setProfile({ ...profile, phone: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="pin" size={14} />Location</label>
                    <input
                      type="text"
                      value={profile.location}
                      onChange={e => setProfile({ ...profile, location: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="link" size={14} />GitHub URL</label>
                    <input
                      type="text"
                      value={profile.github || 'https://github.com/Enos2'}
                      onChange={e => setProfile({ ...profile, github: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="link" size={14} />Twitter URL</label>
                    <input
                      type="text"
                      value={profile.twitter || '#'}
                      onChange={e => setProfile({ ...profile, twitter: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><Icon name="link" size={14} />LinkedIn URL</label>
                    <input
                      type="text"
                      value={profile.linkedin || '#'}
                      onChange={e => setProfile({ ...profile, linkedin: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ─── MESSAGES ─── */}
          {activeTab === 'messages' && (
            <section className="admin-section">
              <div className="section-head">
                <div>
                  <h2>Messages</h2>
                  <p className="admin-desc">Sent through your contact form</p>
                </div>
                <FeedsTag variant="private">Private — not on site</FeedsTag>
              </div>

              {messages.length === 0 ? (
                <div className="empty-state">
                  <Icon name="inbox" size={32} />
                  <p>No messages yet. Share your portfolio to start the conversation.</p>
                </div>
              ) : (
                <div className="messages-list">
                  {messages.map((msg, i) => (
                    <div key={i} className="message-item">
                      <div className="message-header">
                        <div className="message-who">
                          <span className="message-avatar">{(msg.name || '?').charAt(0).toUpperCase()}</span>
                          <div>
                            <span className="name">{msg.name}</span>
                            <span className="email">{msg.email}</span>
                          </div>
                        </div>
                        <div className="message-meta">
                          <span className="date">{msg.date || new Date().toLocaleDateString()}</span>
                          <button onClick={() => deleteMessage(i)} className="btn-delete" aria-label="Delete message">
                            <Icon name="trash" size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="message-subject">{msg.subject || 'No subject'}</div>
                      <div className="message-body">{msg.message}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default Admin