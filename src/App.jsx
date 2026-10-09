import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Component/Signup.jsx'
import Login from './Component/Login.jsx'
import Home from  './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import FaQ from './pages/FaQ.jsx'
import ForgotPassword from './Component/ForgotPassword.jsx'
import ResetPassword from './Component/ResetPassword.jsx'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
  )
}

export default App