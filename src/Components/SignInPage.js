import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';
import logo from '../Components/Logo.png';


const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        
        console.log('User signed in with', { username, password });

        navigate('/home');  
    };

    const handleForgotPassword = () => {
        navigate ('/ForgotPasswordPage');
    };

    const handleBackToStart = () => {
       
        navigate('/signup');  
    };

    return (
        <div className="signin-container">
            <div >
                <img src={logo} className="logo" />
            </div>
            <h3>Where every stay offers a picture-perfect Perspective</h3>
            <h2>SIGN-IN</h2>
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
            <button className="signin-button" onClick={handleSignIn}>Sign In</button><br/>
            <button className="forgot-password-button" onClick={handleForgotPassword}>Forgot Password?</button><br></br>

            
            <button className="back-btn" onClick={handleBackToStart}>Don't have an account?Sign-up</button>
        </div>
    );
};

export default SignInPage;
