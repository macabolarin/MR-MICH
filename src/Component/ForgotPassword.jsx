import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('resetEmail', email)
        alert(`Reset link sent to ${email}(demo)`)
        navigate('/reset-password')
    }

    return (
        <div style={{ maxWidth: '400px',
    margin: '80px auto', padding: '20px',
    border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Forgot Password</h2>
        <p> Enter your mail to receive a reset link</p>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Enter yourmail"
            value={email}
            onChange={(e) =>
    setEmail(e.target.value)}
                required
                style={{ width: '100%', padding:'12px', margin: '10px o', borderRadius: '5px', border: '1px solid  #ccc' }}
                />
                <button type="submit"
                style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color:'white', border: "5px", 
             cursor: 'pointer' }}>
                Send Reset Link
             </button>
        </form>
        <p style={{ marginTop: '15px' }}><Link to='/login'>Back to Login</Link></p>
        </div>
    )
}

export default ForgotPassword