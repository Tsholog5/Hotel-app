import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './BookingSummary.css';

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, guests, checkInDate, checkOutDate, vat, totalAmount } = location.state || {};

  const handleProceedToPay = () => {
   
    navigate("/Bookings", {
      state: { room, guests, checkInDate, checkOutDate, vat, totalAmount }
    });
  };

  return (
    <div className="booking-summary-container">
      <h1>Booking Summary</h1>
      
      {room ? (
        <div className="booking-summary">
          <div className="room-info">
            <h2>{room.roomType}</h2>
            <img src={room.image} alt={room.roomType} className="summary-room-image" />
          </div>
          
          <div className="booking-details">
            <p><strong>Guests:</strong> {guests}</p>
            <p><strong>Check-in Date:</strong> {checkInDate}</p>
            <p><strong>Check-out Date:</strong> {checkOutDate}</p>
            <p><strong>VAT (15%):</strong> R{vat.toFixed(2)}</p>
            <p><strong>Total Amount:</strong> R{totalAmount.toFixed(2)}</p>

            <button className="proceed-pay-button" onClick={handleProceedToPay}>
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <p>No booking details available. Please go back and select a room.</p>
      )}
    </div>
  );
};

export default BookingSummary;
