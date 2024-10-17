import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faWind, faConciergeBell, faCoffee, faWifi, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './RoomSelection.css';

const RoomSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state;

  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isFavorite, setIsFavorite] = useState(false); 

  const calculateTotalPrice = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));

    const pricePerNight = room.standardRate || 0;  // Use room.standardRate
    const totalPrice = pricePerNight * nights;  
    const vat = totalPrice * 0.15;  
    const totalAmount = totalPrice + vat;  

    return { vat, totalAmount, nights, pricePerNight };
  };

  const { vat, totalAmount, nights, pricePerNight } = calculateTotalPrice();

  const isValidBooking = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    return checkInDate && checkOutDate && checkOut > checkIn && guests > 0;
  };

  const handleRESERVE = () => {
    navigate("/BookingSummary", {
      state: {
        room,
        guests,
        checkInDate,
        checkOutDate,
        vat,
        totalAmount,
      }
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); 
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this room: ${room.roomType}`,
        text: `I found this amazing room: ${room.roomType} at our hotel!`,
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch((error) => {
        console.error('Something went wrong sharing the room:', error);
      });
    } else {
      alert('Share feature is not supported in your browser.');
    }
  };

  return (
    <div>
      <div className="room-selection-summary">
        <div className="room-image-section">
          <div className="room-icons-top">
            <button className="icon-button" onClick={toggleFavorite}>
              <FontAwesomeIcon 
                icon={faHeart} 
                className="icon-heart" 
                style={{ color: isFavorite ? 'red' : 'gray' }} 
              />
            </button>
            <button className="icon-button" onClick={handleShare}>
              <FontAwesomeIcon icon={faShareAlt} className="icon-share" />
            </button>
          </div>
          <h2>{room.roomType}</h2>
          <img src={room.image} className="img-room-selection" alt={room.roomType} />
        </div>
        
        <div className="card-booking-form">
          <h1>BOOK A ROOM</h1>
          <div className="stay-details-form">
            <label>
              Check-in Date:
              <input 
                type="date" 
                value={checkInDate} 
                onChange={(e) => setCheckInDate(e.target.value)} 
              />
            </label>
            <label>
              Check-out Date:
              <input 
                type="date" 
                value={checkOutDate} 
                onChange={(e) => setCheckOutDate(e.target.value)} 
              />
            </label>
            <label>
              Number of Guests:
              <input 
                type="number" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                min="1"
              />
            </label>

            <p><strong>Price per night:</strong> R{pricePerNight}</p>
            <p><strong>Nights:</strong> {nights}</p>
            <p><strong>VAT (15%):</strong> R{vat.toFixed(2)}</p>
            <p><strong>Total amount:</strong> R{totalAmount.toFixed(2)}</p>

            <button 
              className="reserve-button" 
              onClick={handleRESERVE}
              disabled={!isValidBooking()}
            >
              RESERVE
            </button>
          </div>
        </div>
      </div>

      <div className="room-description">
        <h2>Room Description</h2>
        <p>{room.description}</p>

        <div className="room-icons">
          <h3>Room Features</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faBed} /> 1 Bed
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} /> Air Conditioning
            </li>
            <li>
              <FontAwesomeIcon icon={faConciergeBell} /> Room Service
            </li>
            <li>
              <FontAwesomeIcon icon={faCoffee} /> Coffee Maker
            </li>
            <li>
              <FontAwesomeIcon icon={faWifi} /> Free WiFi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
