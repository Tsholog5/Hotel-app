import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartupPage from './Components/StartupPage';
import SignInPage from './Components/SignInPage';
import SignUpPage from './Components/SignUpPage';
import HomePage from './Components/HomePage'; 
import ForgotPasswordPage from './Components/ForgotPasswordPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartupPage />} />  
                <Route path="/signin" element={<SignInPage />} />  
                <Route path="/signup" element={<SignUpPage />} />  
                <Route path="/home" element={<HomePage />} /> 
                <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} /> 
                
            </Routes>
        </Router>
    );
}

export default App;
