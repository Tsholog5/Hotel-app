import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Bookings.css';

const Bookings = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  const room = location.state?.room || ''; 
  const checkInDate = location.state?.checkInDate || '';
  const checkOutDate = location.state?.checkOutDate || '';
  const guests = location.state?.guests || '';

  const roomPrices = {
    'Superior Room': 1955,
    "Deluxe Room": 2244,
    'Super Deluxe Room': 2690,
    'Executive Room': 3229,
  };

  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  };

  const nights = checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0;
  const roomPricePerNight = roomPrices[room] || 0;
  const totalRoomPrice = roomPricePerNight * nights;
  const vat = totalRoomPrice * 0.15;
  const totalAmount = totalRoomPrice + vat;

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Payment successful! Your booking is confirmed.');
    navigate("/Checkout"); 
  };

  return (
    <div className="booking-page">
      <h1>Payment Details</h1>

      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label htmlFor="room">Room Type:</label>
          <input type="text" id="room" value={room} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input type="date" id="checkInDate" value={checkInDate} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input type="date" id="checkOutDate" value={checkOutDate} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" value={guests} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardName">Card Holder Name:</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            placeholder="MM/YY"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>

        <div className="checkout-buttons">
          <button type="submit" className="checkout-button">Proceed to Payment</button>
        </div>
      </form>
    </div>
  );
};

export default Bookings;
