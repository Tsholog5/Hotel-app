import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../Components/Logo.png";

function Navigation() {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("User logged out");
        
        navigate("/signin"); 
    };
    const handlebooknowbutton = () => {
        console.log("User book now");
        navigate("/rooms");
      }

    return (
        <div className="home-container">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="nav-menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/explore">Explore</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div  className="nav-buttons">
                    <button className="book-now-button" onclick={handlebooknowbutton}>Book Now</button>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
