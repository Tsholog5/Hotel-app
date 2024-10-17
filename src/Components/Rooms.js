import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Rooms.css';
import logo from "../Components/Logo.png";
import superiorroom from '../Components/superior room.jpg';
import deluxroom from '../Components/Delux room.jpg';
import superdeluxroom from '../Components/super delux room.jpg';
import executivesuite from '../Components/Executive suite.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/roomSlice';

const Rooms = () => {
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomRatesVisibility, setRoomRatesVisibility] = useState({});
  
 
  const { data, loading, error } = useSelector((state) => state.rooms);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Fetch data from Firestore on component mount
  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);
  console.log(data);
  console.log(loading);
  console.log(error);

  // Static rooms data as fallback in case data is not fetched or is empty
  const roomsData = [
    {
      roomType: 'Superior Room',
      image: superiorroom,
      description:
        'The superior room is a well proportioned room, elegant and impressive for a relaxed night away at VIEWS BOUTIQUE HOTEL.Complete with a double bed, air conditioned, room service, coffee/tea maker, free WIFI and a cool but sophisticated decor, it is the ultimate room for work, rest, and pleasure.',
      standardRate: 1955,
    },
    {
      roomType: 'Deluxe Room',
      image: deluxroom,
      description:
        'Experience unparalleled luxury in our Deluxe room, where elegance meets comfort. Enjoy spacious surroundings, exquisite furnishings, and top-notch amenities designed for the ultimate relaxation and indulgence. Perfect for those seeking a sophisticated escape with a touch of opulence. Complete with 1 king-size bed, robe, hair dryer, WIFI, and complimentary on-site parking.',
      standardRate: 2244,
    },
    {
      roomType: 'Super Deluxe Room',
      image: superdeluxroom,
      description:
        'Step into a world of unparalleled luxury with our Super Deluxe Room. This exquisite retreat boasts an expansive layout, premium furnishings, and lavish amenities designed for those who crave the finest in comfort and style. Complete with a living/sitting room, separate bathtub and shower, premium movie channels, and full business center onsite.',
      standardRate: 2690,
    },
    {
      roomType: 'Executive Suite',
      image: executivesuite,
      description:
        'Elevate your stay in our Executive Suite, where business meets pleasure in perfect harmony. Revel in elegantly spacious designed interiors, state-of-the-art amenities, and dedicated workspaces that cater to your professional needs while offering unmatched comfort and sophistication. Complete with a dining area, separate living room, office setup, complimentary slippers, and personalized minibar.',
      standardRate: 3229,
    },
  ];

  // Fallback data handling
  const roomsToDisplay = data && data.length ? data : roomsData;

  const handleContinue = () => {
    console.log("User continues to book");
    navigate("/Bookings");
  };

  const handleBookNowButton = (room) => {
    console.log(room);
    navigate("/RoomSelection", { state: room });
  };

  const handleToggleViewRates = (roomType) => {
    setRoomRatesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [roomType]: !prevVisibility[roomType],
    }));
  };

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
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="book-now-button" onClick={handleBookNowButton}>Book Now</button>
          <button className="logout-button" onClick={() => console.log('Logout')}>Logout</button>
        </div>
      </div>

      <div className="room-selection">
        <div className="room-cards">
          {roomsToDisplay.map((room, index) => (
            <div key={room.roomType} className="room-card">
              <img src={room.image} alt={room.roomType} className='card-img' />
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
                    <p>Total: R{(room.standardRate * 1.15).toFixed(2)} (includes breakfast)</p>
                    <button className="book-now-button" onClick={() => handleBookNowButton(room)}>
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