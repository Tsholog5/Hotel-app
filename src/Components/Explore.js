import React from "react";
import { Link } from "react-router-dom";
import logo from "../Components/Logo.png";
import "./Explore.css";
import image1 from "../Components/bigHole.jpg"
import image2 from "../Components/mineMuseam.jpg"
import image3 from "../Components/nationalPark.jpg"
import image4 from "../Components/battlefield.jpg"
import image5 from "../Components/Craftshop.jpg"
import image6 from "../Components/spa-wellness center.jpg"
import image7 from "../Components/fine dining restaurant.jpg"
import image8 from "../Components/infinityPool.jpg"
import image9 from "../Components/luxurySuite.jpg"
import image10 from "../Components/yogaClasses.jpg"
import image11 from "../Components/businessLounge.jpg"
import image12 from "../Components/winetasting.jpg"
import image13 from "../Components/sunset safari tours.jpg"
import image14 from "../Components/hot airballon.jpg"
import image15 from "../Components/personalizedspa.jpg"
import image16 from "../Components/historicalwalks.jpg"


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
          <li>
            <Link to="/Gallery">Gallery</Link>
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
          <p>At VIEWS BOUTIQUE HOTEL,enjoy luxurious rooms,gourmet dining,a rejuvenating spa and stunning panoramic views</p>
          <div className="amenities-list">
            <div className="amenity-item">
              <img src={image6} alt="Spa & Wellness Center" />
              <p>Spa & Wellness Center</p>
            </div>
            <div className="amenity-item">
              <img src={image7} alt="Fine Dining Restaurant" />
              <p>Fine Dining Restaurant</p>
            </div>
            <div className="amenity-item">
              <img src={image8} alt="Infinity Pool with Scenic Views" />
              <p>Infinity Pool with Scenic Views</p>
            </div>
            <div className="amenity-item">
              <img src={image9} alt="Luxury Suites with Private Balconies" />
              <p>Luxury Suites with Private Balconies</p>
            </div>
            <div className="amenity-item">
              <img src={image10} alt="Fitness Center and Yoga Classes" />
              <p>Fitness Center and Yoga Classes</p>
            </div>
            <div className="amenity-item">
              <img src={image11} alt="Free Wi-Fi and Business Lounge" />
              <p>Free Wi-Fi and Business Lounge</p>
            </div>
          </div>
        </div>
        <div className="explore-section">
          <h2>Nearby Attractions</h2>
          <p>Our hotel is surrounded by some of the most exciting attractions in Kimberley and beyond:</p>
          <div className="attractions-list">
            <div className="attraction-item">
              <img src={image1} alt="The Big Hole" />
              <p>The Big Hole - Explore the world's largest hand-dug excavation</p>
            </div>
            <div className="attraction-item">
              <img src={image2} alt="Kimberley Mine Museum" />
              <p>Kimberley Mine Museum - A step back into diamond mining history</p>
            </div>
            <div className="attraction-item">
              <img src={image3} alt="Mokala National Park" />
              <p>Mokala National Park - Experience South Africa's wildlife and scenic beauty</p>
            </div>
            <div className="attraction-item">
              <img src={image4} alt="Magersfontein Battlefield" />
              <p>Magersfontein Battlefield - Learn about the Anglo-Boer War history</p>
            </div>
            <div className="attraction-item">
              <img src={image5} alt="Local Markets & Craft Shops" />
              <p>Local Markets & Craft Shops - Explore local artisans' products and crafts</p>
            </div>
          </div>
        </div>

        <div className="explore-section">
          <h2>Unique Experiences</h2>
          <p>We offer personalized and exclusive experiences to make your stay unforgettable:</p>
          <div className="experiences-list">
            <div className="experience-item">
              <img src={image12} alt="Private Wine Tastings" />
              <p>Private Wine Tastings </p>
            </div>
            <div className="experience-item">
              <img src={image13} alt="Sunset Safari Tours" />
              <p>Sunset Safari Tours</p>
            </div>
            <div className="experience-item">
              <img src={image14} alt="Hot Air Balloon Rides" />
              <p>Hot Air Balloon Rides over Kimberley</p>
            </div>
            <div className="experience-item">
              <img src={image15} alt="Personalized Spa Treatments" />
              <p>Personalized Spa Treatments</p>
            </div>
            <div className="experience-item">
              <img src={image16} alt="Guided Historical Walks" />
              <p>Guided Historical Walks in the City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;