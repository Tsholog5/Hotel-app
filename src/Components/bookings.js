import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Bookings.css';

const Booking = () => {
  const [room, setRoom] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [paymentOption, setPaymentOption] = useState('full');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate(); 

  const roomPrices = {
    'Superior Room': 1955,
    "Deluxe Room": 2244,
    'Super Deluxe room': 2690,
    'Executive room': 3229,
  };

  const handleCheckoutButton = () => {
    console.log("User is checking out");
    navigate("/Checkout"); 
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

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    let message = 'Payment successful! Your booking is confirmed.';

    if (paymentOption === 'half') {
      message =
        'Half of the payment is successful! The remaining balance will be charged 2 days before check-in.';
    } else if (paymentOption === 'later') {
      message = 'Reservation successful! You can pay later.';
    }

    alert(message);
  };

  return (
    <div className="booking-page">
      <h1>Confirm Your Booking</h1>

      <div className="booking-details">
        <h2>Enter Booking Details</h2>

        <div className="form-group">
          <label htmlFor="room">Room Type:</label>
          <select id="room" value={room} onChange={(e) => setRoom(e.target.value)} required>
            <option value="">Select Room</option>
            <option value="Superior Room">Superior Room</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Super Deluxe Room">Super Deluxe Room</option>
            <option value="Executive Room">Executive Room</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </div>
      </div>

      {room && checkInDate && checkOutDate && guests && (
        <div className="booking-summary">
          <h2>Booking Summary</h2>
          <p>
            <strong>Room Type:</strong> {room}
          </p>
          <p>
            <strong>Check-In:</strong> {checkInDate}
          </p>
          <p>
            <strong>Check-Out:</strong> {checkOutDate}
          </p>
          <p>
            <strong>Guests:</strong> {guests}
          </p>
          <p>
            <strong>Total Nights:</strong> {nights}
          </p>
          <p>
            <strong>Total per Night:</strong> R{roomPricePerNight}
          </p>
          <p>
            <strong>Total Room Price:</strong> R{totalRoomPrice}
          </p>
          <p>
            <strong>15% VAT:</strong> R{vat.toFixed(2)}
          </p>
          <p>
            <strong>Total Amount:</strong> R{totalAmount.toFixed(2)}
          </p>
        </div>
      )}

      <div className="checkout-buttons">
        <button className="checkout-button" onClick={handleCheckoutButton}>CHECK OUT</button>
      </div>
    </div>
  );
};

export default Booking;
