import React from "react";
import { Link } from "react-router-dom";
import logo from "../Components/Logo.png";
import "./Explore.css";

const Explore = () => {
  const handlebooknowbutton = () => {
    
    alert("Book Now clicked!");
  };

  const handleLogout = () => {
    
    alert("Logged out!");
  };

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
        <div className="nav-buttons">
          <button className="book-now-button" onClick={handlebooknowbutton}>Book Now</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="explore-container">
        <h1 className="explore-heading">Explore Views Boutique Hotel</h1>
        <p className="explore-subheading">Discover the luxury, comfort, and unique experiences we offer.</p>

      
        <div className="explore-section">
          <h2>Our Amenities</h2>
          <ul className="amenities-list">
            <li>Spa & Wellness Center</li>
            <li>Fine Dining Restaurant</li>
            <li>Infinity Pool with Scenic Views</li>
            <li>Luxury Suites with Private Balconies</li>
            <li>Fitness Center and Yoga Classes</li>
            <li>Free Wi-Fi and Business Lounge</li>
          </ul>
        </div>

        
        <div className="explore-section">
          <h2>Nearby Attractions</h2>
          <p>Our hotel is surrounded by some of the most exciting attractions in Kimberley and beyond:</p>
          <ul className="attractions-list">
            <li>The Big Hole - Explore the world's largest hand-dug excavation</li>
            <li>Kimberley Mine Museum - A step back into diamond mining history</li>
            <li>Mokala National Park - Experience South Africa's wildlife and scenic beauty</li>
            <li>Magersfontein Battlefield - Learn about the Anglo-Boer War history</li>
            <li>Local Markets & Craft Shops - Explore local artisans' products and crafts</li>
          </ul>
        </div>

       
        <div className="explore-section">
          <h2>Unique Experiences</h2>
          <p>We offer personalized and exclusive experiences to make your stay unforgettable:</p>
          <ul className="experiences-list">
            <li>Private Wine Tastings with Local Vintners</li>
            <li>Sunset Safari Tours</li>
            <li>Hot Air Balloon Rides over Kimberley</li>
            <li>Personalized Spa Treatments</li>
            <li>Guided Historical Walks in the City</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
