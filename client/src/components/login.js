import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './login.css';
import login_bg from './main-lib-aerial.jpg';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
        onLogin(); // Call the onLogin function to update authentication state
    };

    return (
        <div 
            style={{
                backgroundImage: `url(${login_bg})`,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundSize: 'cover', // Cover the entire background
                backgroundPosition: 'center', // Center the image
                backgroundAttachment: 'fixed' // Make background fixed
            }} 
            className="login-container"
        >
            <div className="login-box" style={{ marginLeft: '50px' }}> {/* Move box to the left */}
                <h2>NPIMS Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Link to="/" onClick={handleSubmit} style={{ textDecoration: 'none' }}>
                        <button type="button">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
    