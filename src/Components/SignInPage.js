import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';
import logo from '../Components/Logo.png';
import {useSelector,useDispatch} from 'react-redux'
import { signIn } from '../Redux/auth'
import  {auth} from '../Config/Firebase'



const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const dispatch=useDispatch()
    const {user,loading,error}=useSelector((state) => state.auth);

    const handleSignIn = () => {
        dispatch(signIn({email,password}))  
    };

    useEffect(() => {
        if (user) {
            alert('SignIn successful!');
            navigate('/home');
        }
        }, [user, navigate]);

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
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
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

            {loading && <h1>Loading...</h1>}
            {error && <p>{error}</p>}


            <button className="forgot-password-button" onClick={handleForgotPassword}>Forgot Password?</button><br></br>

            
            <button className="back-btn" onClick={handleBackToStart}>Don't have an account?Sign-up</button>
        </div>
    );
};

export default SignInPage;
