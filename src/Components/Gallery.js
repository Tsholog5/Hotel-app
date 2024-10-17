import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Components/Logo.png";
import "./Gallery.css";
import Gallery1 from "../Components/Gallery/Gallery1.jpg";
import Gallery2 from "../Components/Gallery/Gallery2.jpg";
import Gallery3 from "../Components/Gallery/Gallery3.jpg";
import Gallery4 from "../Components/Gallery/Gallery4.jpg";
import Gallery5 from "../Components/Gallery/Gallery5.jpg";
import Gallery6 from "../Components/Gallery/Gallery6.jpg";
import Gallery7 from "../Components/Gallery/Gallery7.jpg";
import Gallery8 from "../Components/Gallery/Gallery8.jpg";
import Gallery9 from "../Components/Gallery/Gallery9.jpg";
import Gallery10 from "../Components/Gallery/Gallery10.jpg";
import Gallery11 from "../Components/Gallery/Gallery11.jpg";
import Gallery12 from "../Components/Gallery/Gallery12.jpg";
import Gallery13 from "../Components/Gallery/Gallery13.jpg";
import Gallery14 from "../Components/Gallery/Gallery14.jpg";
import Gallery15 from "../Components/Gallery/Gallery15.jpg";
import Gallery16 from "../Components/Gallery/Gallery16.jpg";
import Gallery17 from "../Components/Gallery/Gallery17.jpg";
import Gallery18 from "../Components/Gallery/Gallery18.jpg";
import Gallery19 from "../Components/Gallery/Gallery19.jpg";
import Gallery20 from "../Components/Gallery/Gallery20.jpg";

const Gallery = () => {
  const [selectedRoom, setSelectedRoom] = useState("SUPERIOR");

  const handleRoomSelection = (roomType) => {
    setSelectedRoom(roomType);
  };

  const handleBookNow = () => {
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
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="book-now-button" onClick={handleBookNow}>
            Book Now
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="gallery-container">
        <h1 className="gallery-heading">Unveiling Elegance: Our Hotel Gallery</h1>
        <p className="gallery-subheading">A VISUAL JOURNEY THROUGH LUXURY</p>

        
        <div className="room-selection">
          <button className="selectionButton" onClick={() => handleRoomSelection("SUPERIOR")}>SUPERIOR ROOM </button>
          <button className="selectionButton" onClick={() => handleRoomSelection("DELUXE")}>DELUXE ROOM</button>
          <button className="selectionButton" onClick={() => handleRoomSelection("SUPER_DELUXE")}>SUPER DELUXE ROOM</button>
          <button className="selectionButton" onClick={() => handleRoomSelection("EXECUTIVE_SUITE")}>EXECUTIVE SUITE</button>
        </div>

        
        {selectedRoom === "SUPERIOR" && (
          <div className="gallery-section">
            <h1 className="galleryH2">SUPERIOR ROOM</h1>
            <p className="tagline">Discover Your Perfect Retreat</p>
            <div className="gallery-list">
              <div className="gallery-item">
                <img src={Gallery1} alt="Superior Room 1" />
              </div>
              <div className="gallery-item">
                <img src={Gallery2} alt="Superior Room 2" />
              </div>
              <div className="gallery-item">
                <img src={Gallery3} alt="Superior Room 3" />
              </div>
              <div className="gallery-item">
                <img src={Gallery4} alt="Superior Room 4" />
              </div>
              <div className="gallery-item">
                <img src={Gallery5} alt="Superior Room 5" />
              </div>
              <div className="gallery-item">
                <img src={Gallery6} alt="Superior Room 6" />
              </div>
            </div>
          </div>
        )}

        {selectedRoom === "DELUXE" && (
          <div className="explore-section">
            <h1 className="galleryH2">DELUXE ROOM</h1>
            <p className="tagline">Welcome to Your Dream Escape</p>
            <div className="attractions-list">
              <div className="attraction-item">
                <img src={Gallery7} alt="Deluxe Room 1" />
              </div>
              <div className="attraction-item">
                <img src={Gallery8} alt="Deluxe Room 2" />
              </div>
              <div className="attraction-item">
                <img src={Gallery9} alt="Deluxe Room 3" />
              </div>
              <div className="attraction-item">
                <img src={Gallery10} alt="Deluxe Room 4" />
              </div>
              <div className="attraction-item">
                <img src={Gallery11} alt="Deluxe Room 5" />
              </div>
            </div>
          </div>
        )}

        {selectedRoom === "SUPER_DELUXE" && (
          <div className="explore-section">
            <h1 className="galleryH2">SUPER DELUXE ROOM</h1>
            <p className="tagline">Experience Comfort in Every Corner</p>
            <div className="experiences-list">
              <div className="experience-item">
                <img src={Gallery12} alt="Super Deluxe Room 1" />
              </div>
              <div className="experience-item">
                <img src={Gallery13} alt="Super Deluxe Room 2" />
              </div>
              <div className="experience-item">
                <img src={Gallery14} alt="Super Deluxe Room 3" />
              </div>
              <div className="experience-item">
                <img src={Gallery15} alt="Super Deluxe Room 4" />
              </div>
              <div className="experience-item">
                <img src={Gallery16} alt="Super Deluxe Room 5" />
              </div>
            </div>
          </div>
        )}

        {selectedRoom === "EXECUTIVE_SUITE" && (
          <div className="explore-section">
            <h1 className="galleryH2">EXECUTIVE SUITE</h1>
            <p className="tagline">Capturing the Essence of Hospitality</p>
            <div className="experiences-list">
              <div className="experience-item">
                <img src={Gallery17} alt="Executive Suite 1" />
              </div>
              <div className="experience-item">
                <img src={Gallery18} alt="Executive Suite 2" />
              </div>
              <div className="experience-item">
                <img src={Gallery19} alt="Executive Suite 3" />
              </div>
              <div className="experience-item">
                <img src={Gallery20} alt="Executive Suite 4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
