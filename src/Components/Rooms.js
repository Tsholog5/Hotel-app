import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Rooms.css';
import logo from "../Components/Logo.png";
import superiorroom from '../Components/superior room.jpg';
import deluxroom from '../Components/Delux room.jpg';
import superdeluxroom from '../Components/super delux room.jpg';
import executivesuite from '../Components/Executive suite.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/dbSlice';

const Rooms = () => {
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomRatesVisibility, setRoomRatesVisibility] = useState({});

  const { data, loading, error } = useSelector((state) => state.data);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData()); // Fetch data from Firestore
  }, [dispatch]);
  
  const handleBookNowButton = (room) => {
    const standardRate = room.standardRate || 0;
    const vat = standardRate * 0.15; // 15% VAT
    const totalAmount = standardRate + vat; // Total amount including VAT

    navigate("/RoomSelection", {
      state: {
        ...room,
        vat,
        totalAmount
      }
    });
  };

  const handleToggleViewRates = (roomType) => {
    setRoomRatesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [roomType]: !prevVisibility[roomType]
    }));
  };

  return (
    <div className="home-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-buttons">
          <button className="book-now-button">Book Now</button>
          <button className="logout-button" onClick={() => console.log('Logout')}>Logout</button>
        </div>
      </div>

      <div className="room-selection">
        <h2>SELECT A ROOM</h2>
        <div className="room-cards">
          {data.map((room) => (
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
