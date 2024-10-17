import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ForgotPasswordPage.css';
import { forgotPassword} from "../Redux/auth"

import {useSelector,useDispatch} from 'react-redux'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch ();
    const navigate = useNavigate(); 

   
    const {user,loading,error}=useSelector((state) => state.auth);

    const handleSendCode = (e) => {
        e.preventDefault();
        
        console.log('Verification code sent to:', email);
        //setCodeSent(true);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        dispatch(forgotPassword({email}));
        console.log('Password reset with code:', verificationCode, 'and new password:', newPassword);
        
        

    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            {!codeSent ? (
                <div>
                    <div className="input-group">
                        <label htmlFor="email">Enter your email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="send-code-button"  onClick={ handleResetPassword}>submit</button>
                </div>
            ) : (
                <form onSubmit={handleResetPassword}>
                    <div className="input-group">
                        <label htmlFor="verificationCode">Enter verification code</label>
                        <input
                            type="text"
                            id="verificationCode"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="newPassword">Enter new password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="reset-password-button">Reset Password</button>
                </form>
            )}
        </div>
    );
};

export default ForgotPasswordPage;
