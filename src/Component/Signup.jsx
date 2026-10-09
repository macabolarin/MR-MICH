import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('Creating account...');
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Account created! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMsg(data.message);
      }
    } catch (err) {
      setMsg('Error connecting to server');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Sign Up - CyberGuard</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', background: 'blue', color: 'white' }}>Sign Up</button>
      </form>
      <p>{msg}</p>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </div>
  );
}
export default Signup;