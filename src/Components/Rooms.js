import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Rooms.css';
import logo from "../Components/Logo.png";
import superiorroom from '../Components/superior room.jpg';
import deluxroom from '../Components/Delux room.jpg';
import superdeluxroom from '../Components/super delux room.jpg';
import executivesuite from '../Components/Executive suite.jpg';

const Rooms = () => {
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomRatesVisibility, setRoomRatesVisibility] = useState({});
  const navigate = useNavigate(); 

  const handleContinue = () => {
    console.log("User continues to book");
    navigate("/Bookings"); 
  };

  const handleBookNowButton = () => {
    console.log("User book now");
    navigate("/Bookings");
  };

  const handleToggleViewRates = (roomType) => {
    setRoomRatesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [roomType]: !prevVisibility[roomType]
    }));
  };

  const roomsData = [
    {
      roomType: 'Superior Room',
      image: superiorroom,
      description:
        'The superior room is a well proportioned room, elegant and impressive for a relaxed night away at VIEWS BOUTIQUE HOTEL.Complete with a double bed, air conditioned, room service, coffee/tea maker , free WIFI and a cool but sophisticated decor, it is the ultimate room for work , rest and pleasure.',
      standardRate: 1955,
    },
    {
      roomType: 'Deluxe Room',
      image: deluxroom,
      description:
        'Experience unparalleled luxury in our Deluxe room, where elegance meets comfort. Enjoy spacious surroundings,exquisite furnishings, and top-notch amenities designed for the ultimate relaxation and indulgence.Perfect for those seeking a sophisticated escape with a touch of opulence.Complete with 1 king size bed, robe and hair dryer,WIFI and complementary on-site parking',
      standardRate: 2244,
    },
    {
      roomType: 'Super Deluxe Room',
      image: superdeluxroom,
      description:
        'Step into a world of unparalleled luxury with our Super Deluxe Room. This exquisite retreats boasts an expensive layout,premium furnishings, and lavish amenities designed for those who crave the finest in comfort and style.Elevate your stay to new heights of elegance and sophistication. Complete living/sitting room,separate bathtub and shower , premium movie channels and full business centre onsite.',
      standardRate: 2690,
    },
    {
      roomType: 'Executive Suite',
      image: executivesuite,
      description:
        'Elevate your stay in our Executive Suite, where business meets pleasure in perfect harmony. Revel in  elegantly spacious designed interiors, state-of-the-art amenities, and dedicated workspaces that cater to your ile professional needs while offering unmatched comfort and sophistication for ultimate relaxation.Completed with dining area,separate living room,office set-up,complimentary slippers and personalised mini bar.',
      standardRate: 3229,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your stay: Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Guests: ${guests}`);
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
          <button className="book-now-button" onClick={handleBookNowButton}>Book Now</button>
          <button className="logout-button" onClick={() => console.log('Logout')}>Logout</button>
        </div>
      </div>

    
        <div className="room-selection">
          <h2>SELECT A ROOM</h2>
          <div className="room-cards">
            {roomsData.map((room) => (
              <div key={room.roomType} className="room-card">
                <img src={room.image} alt={room.roomType} />
                <div className="room-info">
                  <h4>{room.roomType}</h4>
                  <p>{room.description}</p>
                  <button className="view-rates-button" onClick={() => handleToggleViewRates(room.roomType)}>
                    {roomRatesVisibility[room.roomType] ? 'Hide Rates' : 'View Rates'}
                  </button>
                  {roomRatesVisibility[room.roomType] && (
                    <div className="room-rates">
                      <p>Standard Rate: R{room.standardRate}</p>
                      <p>15% VAT: R{(room.standardRate * 0.15).toFixed(2)}</p>
                      <p>Total per night: R{(room.standardRate + room.standardRate * 0.15).toFixed(2)} (includes breakfast)</p>
                      <button className="book-now-button" onClick={handleBookNowButton}>
                        Book Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default Rooms;
