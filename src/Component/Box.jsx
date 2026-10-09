import React from 'react'
import { Link } from 'react-router-dom';

function Box() {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <Link to='/profile' style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '140px',
        background: '#fffef5', border: '2px solid gold',
        borderRadius: '10px', textDecoration: 'none', marginBottom: '20px'
      }}>
        <h1 style={{ color: '#4a4a8a', letterSpacing: '5px' }}>Mr MICH</h1>
      </Link>

      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '15px'
      }}>
        <Link to='/profile' style={{ height: '130px', background: '#4a4a6a', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'gold' }}>Profile</Link>

        <Link to='/portfolio' style={{ height: '130px', background: '#4a4a6a', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'gold' }}>Portfolio</Link>

        <Link to='/contact' style={{ height: '130px', background: '#4a4a6a', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'gold' }}>contact</Link>

        
        <Link to='/faq' style={{
          height: '130px',
          background: '#6a6aff',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'gold',
          gridColumn: '2 / 3' 
        }}>
          faQ
        </Link>
      </div>
    </div>
  )
}

export default Box;