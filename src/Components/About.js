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
          <li>
            <Link to="/Gallery">Gallery</Link>
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

        <div className="statements">
            <div className="vision">
            <h1>VISION</h1>
            <p>Our vision at VIEWS BOUTIQUE HOTEL is to set a new standard for luxury and uniqueness in the hospitality
                industry. We strive to be the foremost destination for discerning travelers who seek not just a place
                to stay but a personalized experience that goes beyond the ordinary.<br></br>
                By integrating exceptional design,distinctive character, and paralleled service,we aim to craft memorable
                experiences that inspire and delight every guest.We envision a future where our commitment to excellence
                redefines the BOUTIQUE HOTEL experience and where our name is synonymous with sophistication and
                individualized care.
            </p>
                  </div>
                  <div className="mission">
            <h1>MISSION</h1>
            <p>
              At VIEWS BOUTIQUE HOTEL,our mission is to deliver an extraordinary level of service and hospitality that sets
              us apart from the rest.We are dedicated to providing our guests with an experience that blends elegance with comfort,
              offering a warm and welcoming utmosphere tailored to their individual preferences.
            
              Our team is committed to attention to detail and personalizing every aspect of our service to ensure that each guest's stay
              is as memorable and enjoyable as possible. By fostering a culture of excellence and genuine care, we aim to create a
              distinctive haven where guests can unwind ,rejuvenate,and truly feel at home. Through our continuous pursuit of quality and
              innovation ,we seek to build lasting relationships with our guests and become their preferred choice for luxury Boutique
               accommodations.
            </p>
                  </div>
        </div>
      </div>

      
    </div>
  );
};

export default About;
