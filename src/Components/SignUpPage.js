import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; 
import logo from '../Components/Logo.png'; 
import SignInPage from './SignInPage';
import {useSelector,useDispatch} from 'react-redux'
import { signUp } from '../Redux/auth'
import  {auth} from '../Config/Firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const {user,loading,error}=useSelector((state) => state.auth);


    const handleSignUp = () => {
    dispatch(signUp({email,password}))
    };

    useEffect(() => {
        if (user) {
            alert('Signup successful!');
            navigate('/signin');
        }
        }, [user, navigate]);
    
    return (
        <div className="signup-container">
            <img src={logo} className='logo'/>
            <h3> Where every stay offers a picture-perfect Perspective</h3> 
            <h2>CREATE NEW ACCOUNT</h2>
            
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="signup-button" onClick={handleSignUp}>Sign Up</button>

                {loading && <h1>Loading...</h1>}
                {error && <p>{error}</p>}
            
            <button className="back-button" onClick={() => navigate('/signin')}>Already have an account?Sign-in</button>  

            
        </div>
    );
};

export default SignUpPage;
