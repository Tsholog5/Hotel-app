import React from "react";
import "./About.css";
import Aboutus from "../Components/Aboutus.jpg";
import { Link } from "react-router-dom";
import logo from "../Components/Logo.png";

const About = () => {
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
          <button className="book-now-button">Book Now</button>
          <button className="logout-button">Logout</button>
        </div>
      </div>

      <div className="About-info">
        <h1>ABOUT US</h1>
        <img src={Aboutus} className="Aboutus" alt="About us" />
        <div className="Aboutus-message">
          <h3>VIEWS BOUTIQUE HOTEL</h3>
          <h4>Experience Elegance, Embrace Comfort</h4>
          <p>
            Welcome to VIEWS BOUTIQUE HOTEL, where sophistication meets serenity
            in the heart of Kimberley. Our commitment is to provide an
            unparalleled experience that combines luxury, comfort, and
            personalized service.
            <br />
            From the moment you step through our doors, you will be enveloped in
            an ambiance designed to delight the senses and elevate your stay.
            Our meticulously designed rooms offer stunning views and are
            equipped with modern amenities to ensure your utmost relaxation.
            <br />
            At VIEWS BOUTIQUE HOTEL, we pride ourselves on our attention to
            detail and dedication to guest satisfaction. Our team of
            professionals is passionate about making every stay memorable,
            whether you're here for a romantic getaway, a business trip, or a
            leisurely escape.
            <br />
            One of the hallmarks of VIEWS BOUTIQUE HOTEL is our commitment to
            sustainability and community. We embrace eco-friendly practices and
            support local artisans and businesses, ensuring that your stay not
            only benefits you but also contributes positively to the environment
            and the local economy.
            <br />
            At VIEWS BOUTIQUE HOTEL, every stay is more than just a visit; it's an
            experience. We invite you to discover the perfect blend of luxury,
            comfort, and personalized service that defines our HOTEL. Allow us
            to make your next stay an extraordinary one, where every moment is
            crafted to exceed your expectations.
            <br />
            Join us at VIEWS BOUTIQUE HOTEL and discover a haven of elegance and
            comfort that transcends the ordinary. We look forward to welcoming
            you and making your stay exceptional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
