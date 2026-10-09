import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className='Navbar'>
      <h2>Mr MICH</h2>
      
      
      <div className='hamburger' onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </div>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <Link to='/home' onClick={() => setOpen(false)}>HOME</Link>
        <Link to='/profile' onClick={() => setOpen(false)}>PROFILE</Link>
        <Link to='/portfolio' onClick={() => setOpen(false)}>PORTFOLIO</Link>
        <Link to='/contact' onClick={() => setOpen(false)}>CONTACT</Link>
        <Link to='/faq' onClick={() => setOpen(false)}>FAQ</Link>
        <button onClick={handleLogout} className='logout-btn'>
          LOGOUT
        </button>
      </div>
    </nav>
  )
}

export default Navbar