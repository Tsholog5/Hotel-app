import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
       
        console.log('User logged out');
     
        navigate('/signin');
    };

    return (
        <div className="home-container">
            
            <header className="header">
                <div className="logo">
                    <img src="/logo.png" alt="Hotel Logo" />
                </div>
                <nav className="nav-menu">
                    <a href="#home">Home</a>
                    <a href="#explore">Explore</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#book" className="book-now-button">Book Now</a>
                    <button className="logout-button" onClick={handleLogout}>Logout</button> 
                </nav>
            </header>

            
            <div className="main-image">
                <img src="/hotel-main-image.jpg" alt="Hotel Main" />
            </div>

            <footer className="footer">
                <div className="footer-logo">
                    <img src="/logo.png" alt="Hotel Logo" />
                </div>
                <div className="footer-address">
                    <p>1234 Luxury Street, Paradise City, PC 12345</p>
                    <a href="https://goo.gl/maps/your-hotel-address" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
