import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import logo from "../Components/Logo.png";
import hotelview from "../Components/hotelview.jpg";
import heroimage from "../Components/hero.jpg";
import Navigation from "./navigation";

import {
  FaBed,
  FaConciergeBell,
  FaUtensils,
  FaSpa,
  FaGlassMartini,
  FaFilm,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const [guests, setGuests] = useState(1);

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/signin");
  };
  const handleExplore = () => {
    console.log("user checks rooms");
    navigate("/rooms");
  };
  const handleherobtton = () => {
    console.log("User book from hero");
    navigate("/rooms");
  };

  const handlebooknowbutton = () => {
    console.log("User book now");
    navigate("/rooms");
  }



  return (
    <div className="home-container">
      
      <Navigation />

      <div className="hero">
        <div className="heros">
        <div className="hero-content">
          <h1>Experience Comfort and Elegance.</h1>
          <p>
            Your Perfect Stay awaits at Views Hotel.Where Every Detail is
            Designed with You in Mind
          </p>
          <button className="hero-button" onClick={handleherobtton}>
            Book now</button>

        </div>
        
        </div>

      </div>
      <div className="second">
        
        <div>
          <div className="hotel-info">
            <img src={hotelview} className="hotelview" alt="hotelview" />
            <div className="hotel-message">
              <h3>VIEWS BOUTIQUE HOTEL</h3>
              <h4>5-star hotel with Unforgettable view</h4>
              <p>
                Wake up to breathtaking view that turn every morning into a
                masterpiece. Your room is not just a place to stay, it’s a
                front-row seat to nature’s finest show.<br></br>

                VIEWS BOUTIQUE HOTEL, epitomizes opulence and elegance,set against a backdrop of
                breathtaking natural beauty.This exclusive hotel is renowned for it’s unparalleled
                panoramic views,which stretch across sweeping landscapes.<br></br>

                The hotel’s architecture seamlessly blends modern sophistication with timeless charm, creating
                a sanctuary of comfort and style.<br></br>

                VIEWS BOUTIQUE HOTEL is not just a place to stay; it’s an immersive experience where every aspect
                is designed to celebrate and elevate the natural beauty that defines its location.



              </p>
            </div>
          </div>
        </div>

        <div className="what-we-offer">
          <h2>...What We Offer...</h2>
          <div className="offer-items">
            <div className="offer-item">
              <FaBed size={40} />
              <h4>Comfortable Rest</h4>
              <p>
                Experience ultimate relaxation with a stay at our hotel-where
                comfort meets serenity and every detail is designed for your
                perfect rest.{" "}
              </p>
            </div>
            <div className="offer-item">
              <FaConciergeBell size={40} />
              <h4>Best Service</h4>
              <p>
                Indulge in excellent with our hotel’s unparalleled service-where
                every guest is treated like royalty and every need is met with
                exceptional care.{" "}
              </p>
            </div>
            <div className="offer-item">
              <FaUtensils size={40} />
              <h4>Delicious Food</h4>
              <p>
                Savor a culinary adventure at our hotel,where every meal is a
                delectable delight crafted to perfection
              </p>
            </div>
            <div className="offer-item">
              <FaSpa size={40} />
              <h4>Unforgettable Spa</h4>
              <p>
                Indulge in ultimate relaxation at our hotel’s spa sanctuary-
                where tranquility meets luxury and every treatment is a step
                towards your perfect escape.
              </p>
            </div>
            <div className="offer-item">
              <FaGlassMartini size={40} />
              <h4>On-Site Bar</h4>
              <p>
                Unwind and mingle at our hotel’s vibrant on-site bar-where every
                sip is a celebration and every evening, a memorable experience.
              </p>
            </div>
            <div className="offer-item">
              <FaFilm size={40} />
              <h4>Premium Movie Channels</h4>
              <p>
                Experience cinematic luxury at our hotel with premium movie
                channels where every stay comes with a front-row seat to the
                latest blockbusters and timeless classic
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-logo">
            <img src={logo} alt="Footer Logo" />
          </div>
          <div className="footer-address">
            <p>06 Tilleman Cresent Southridge Kimberley 8301</p>
            <a
              href="https://goo.gl/maps/your-hotel-address"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
