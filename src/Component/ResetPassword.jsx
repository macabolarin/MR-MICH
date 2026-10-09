import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ResetPassword() {
    const [password, setpassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleReset = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Password do not match!')
            return
        }
        alert('password reset successful!(demo)')
            localStorage.removeItem('resetEmail')
            navigate('/login')
    }

    return (
        <div style={{ maxWidth: '400px',
    margin: '80px auto', padding: '20px',
    border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Reset Password</h2>
        <form onSubmit={handleReset}>
            <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) =>
    setpassword(e.target.value)}
                required
                style={{ width: '100%', padding:'12px', margin: '10px o', borderRadius: '5px', border: '1px solid  #ccc' }}
                />
                <input
                type="password"
                placeholder="confirm new password"
                value={confirmPassword}
                onChange={(e) =>
    setConfirmPassword(e.target.value)}
                required
                style={{ width: '10% 0', padding:'12px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}
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

export default ResetPassword