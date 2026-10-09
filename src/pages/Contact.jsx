import React from 'react'
import Navbar from '../Component/Navbar.jsx';
import { useState } from 'react';
import './contact.css'

function contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = 
    useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log('sending...', { name, email, message });

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type':
                'application/json' },
                body: JSON.stringify({ name, email, message })
            });

            const data = await res.json();
            console.log('response:', data);

            if (data.success) {
                alert('message sent and received');
                setName('');
                 setEmail('');
                  setMessage('');
            }

        } catch (err) {
            console.log('ERROR:', err);
            alert('backend not running');
        }
    }
    return (
        <div>
            <Navbar />
            <h1>CONTACT</h1>
            <p>Address: No 3 sum town road, pillar view</p>
            <p>Tel:+234984756</p>
            <p>Socials: @heaven</p>
        

        <form onSubmit={handlesubmit}>
            <input value={name} onChange={(e) =>
        setName(e.target.value)}
        placeholder='name' required />

            <input value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder='email' required
                />

                <textarea value={message} onChange={(e) =>
                setMessage(e.target.value)}
                placeholder='message' required />

                <button type='submit'>Send</button>
        </form>
        </div>
    );
}

export default contact;