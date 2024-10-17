import React from 'react';
import { Link } from 'react-router-dom'; 
import './StartupPage.css'; 
import logo from '../Components/Logo.png';

const StartupPage = () => {
    return (
        <div className="container">
           <img src={logo} /> 
            <h1>Welcome to Our Service</h1>
            <div className="button-container">
                <Link to="/signup" className="button">Sign Up</Link>
                <Link to="/signin" className="button">Sign In</Link>
            </div>
        </div>
    );
};

export default StartupPage;
