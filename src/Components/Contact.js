import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import logo from "../Components/Logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactMethod: "",
    urgency: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <div>
      
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
            <button className="book-now-button" onClick={() => alert("Redirect to booking page")}>Book Now</button>
            <button className="logout-button" onClick={() => alert("Logged out")}>Logout</button>
          </div>
        </div>
      </div>

    
      <div className="contact-container">
        <div className="contact-heading">
          <h1><b>Contact Views Boutique Hotel</b></h1>
          <p>For your luxury accommodation needs</p>
        </div>

        <div className="contact-content">
          
          <div className="contact-left">
            <h3>Our Contact Information</h3>

            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <b>Address:</b> 06 Tilleman Cresent,Southridge, Kimberley, South Africa
            </p>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> <b>Google Maps:</b> <a href="https://goo.gl/maps/your-hotel-link" target="_blank" rel="noopener noreferrer">View us on Google Maps</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> <b>Phone:</b> +27 53 848 1593
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <b>Email:</b> info@viewsboutiquehotel.com
            </p>
          </div>

          
          <div className="contact-right">
            <h3>Please use this form to get in touch with us</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject of Inquiry:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preferred Contact Method:</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <div className="form-group">
                <label>Urgency of Inquiry:</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select urgency</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
