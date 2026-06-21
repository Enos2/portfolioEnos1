/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Admin from './pages/Admin'

function AdminWrapper() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('❌ Wrong password!')
      setPassword('')
    }
  }

  if (isAuthenticated) {
    return <Admin onLogout={() => setIsAuthenticated(false)} />
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: '#0d0d0d',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '380px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
      }}>
        <div style={{ fontSize: '40px', textAlign: 'center' }}>🔐</div>
        <h3 style={{ color: '#a78bfa', textAlign: 'center', fontSize: '22px', marginTop: '8px' }}>
          Admin Access
        </h3>
        <p style={{ color: '#9ca3af', textAlign: 'center', fontSize: '13px', marginTop: '4px' }}>
          Enter your password
        </p>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: '#141414',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '10px',
              color: '#e0e0e0',
              fontSize: '16px',
              outline: 'none',
              marginTop: '16px'
            }}
            autoFocus
          />
          {error && <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px' }}>{error}</p>}
          <button 
            type="submit" 
            style={{
              width: '100%',
              marginTop: '16px',
              padding: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminWrapper