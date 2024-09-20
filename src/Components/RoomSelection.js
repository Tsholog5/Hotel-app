import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './RoomSelection.css';

const RoomSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state;

  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const calculateTotalPrice = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));
    const standardRate = room.standardRate || 0;
    const totalRoomPrice = standardRate * nights;
    const vat = totalRoomPrice * 0.15;
    const totalAmount = totalRoomPrice + vat;

    return { totalRoomPrice, vat, totalAmount, nights };
  };

  const handleContinueBooking = () => {
    const { totalRoomPrice, vat, totalAmount } = calculateTotalPrice();
    navigate("/Bookings", {
      state: {
        room,
        guests,
        checkInDate,
        checkOutDate,
        totalRoomPrice,
        vat,
        totalAmount,
      }
    });
  };

  const { totalRoomPrice, vat, totalAmount, nights } = calculateTotalPrice();

  return (
    <div className="room-selection-summary">
      <h1>Room Summary</h1>
      <div className="room-details">
        <h2>{room.roomType}</h2>
        <img src={room.image} alt={room.roomType} />
        <p><strong>Description:</strong> {room.description}</p>
        <p><strong>Price per Night:</strong> R{room.standardRate}</p>
      </div>

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
        <button className="continue-booking-button" onClick={handleContinueBooking}>
          Continue Booking
        </button>
      </div>

      {checkInDate && checkOutDate && (
        <div className="booking-summary">
          <h2>Booking Summary</h2>
          <p><strong>Nights:</strong> {nights}</p>
          <p><strong>Standard Price per Night:</strong> R{room.standardRate.toFixed(2)}</p>
          <p><strong>Total Room Price:</strong> R{totalRoomPrice.toFixed(2)}</p>
          <p><strong>VAT (15%):</strong> R{vat.toFixed(2)}</p>
          <p><strong>Total Price:</strong> R{totalAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default RoomSelection;
