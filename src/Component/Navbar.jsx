import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className='Navbar'>
      <h2>Mr MICH</h2>
      <div className='nav-links'>
        <Link to='/home'>HOME</Link>
        <Link to='/profile'>PROFILE</Link>
        <Link to='/portfolio'>PORTFOLIO</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/faq'>FAQ</Link>
        <button
          onClick={handleLogout}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            font: 'inherit',
            letterSpacing: 'inherit',
            marginLeft: '20px',
            color: 'gold',
          }}
        >
          LOGOUT
        </button>
      </div>
    </nav>
  )
}

export default Navbar