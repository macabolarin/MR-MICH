import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../Component/Box.jsx';
import Navbar from '../Component/Navbar.jsx';
import Footer from '../Component/Footer.jsx';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login');
    } else {
      setUser(savedUser);
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Box />
      <Footer />
    </div>
  );
}

export default Home;