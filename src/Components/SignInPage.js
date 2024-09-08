import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        
        console.log('User signed in with', { username, password });

        navigate('/home');  
    };

    const handleBackToStart = () => {
       
        navigate('/');  
    };

    return (
        <div className="signin-container">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <h2>Sign In</h2>
            <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            <button className="signin-button" onClick={handleSignIn}>Sign In</button>

            
            <button className="back-button" onClick={handleBackToStart}>Back to Start</button>
        </div>
    );
};

export default SignInPage;
