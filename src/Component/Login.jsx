import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login success:', email);
    localStorage.setItem('user', email);
    navigate('/home');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center',
  alignItems: 'center', fontStyle: 'oblique', background: '#f5f5f5' }}>
      <div style={{ background: 'white', 
      padding: '30px', borderRadius: '10px', width: '350px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>

        <h1 style={{ textAlign: 'center', margin: '0 0 5px', letterSpacing: '3px', color: '#0a3d91' }}>
          MR MICH
        </h1>
        <p style={{ textAlign: 'center', margin: '0 0 25px, color: #888', fontSize: '14px' }}>Welcome back</p>

        <form onSubmit={handleLogin}>
          <input type='email'
          placeholder='Email' value={email}
          onChange={e => setEmail(e.target.value)}
          required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px',
        border: '1px solid #ccc', boxSizing: 'border-box' }} />

        <input type='password'
          placeholder='Password' value={password}
          onChange={e => setpassword(e.target.value)}
          required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px',
        border: '1px solid #ccc', boxSizing: 'border-box' }} />

          <button type='submit'
          style={{ width: '100%', padding: '12px', background: '#22c55e', color: 'white', border: 'none',
        borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          No account? <Link to='/signup'
          style={{ color: '#oa3d91', fontWeight: 'bold', textDecoration: 'none' }}>Signup</Link>
        </p>
        <p style={{ textAlign: 'center', marginTop: '10px' }}><Link to='/forgot-password' 
        style={{ fontSize: '13px', color: '#666', textDecoration: 'none' }}>Forgot Password?</Link></p>
      </div>
  </div>
  )
}