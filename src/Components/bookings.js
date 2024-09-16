import React, { useState } from 'react';
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

  // Room prices
  const roomPrices = {
    'Deluxe Room': 200,
    'Standard Room': 150,
  };

  // Calculate the number of nights based on check-in and check-out dates
  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24)); // convert to days
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
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Standard Room">Standard Room</option>
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

      <div className="payment-section">
        <h2>Payment Details</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="full"
                checked={paymentOption === 'full'}
                onChange={() => setPaymentOption('full')}
              />
              Pay Full Amount Now
            </label>
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="half"
                checked={paymentOption === 'half'}
                onChange={() => setPaymentOption('half')}
              />
              Pay Half Now, Remaining Balance 2 Days Before Check-In
            </label>
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="later"
                checked={paymentOption === 'later'}
                onChange={() => setPaymentOption('later')}
              />
              Reserve Room - Pay Later
            </label>
          </div>

          {paymentOption !== 'later' && (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9123 4567"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardName">Cardholder Name:</label>
                <input
                  type="text"
                  id="cardName"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="TsholoG"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date:</label>
                  <input
                    type="month"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv">CVV:</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="billingAddress">Billing Address:</label>
                <input
                  type="text"
                  id="billingAddress"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  placeholder="5153 Buiteman street, Kimberley"
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Tsholofelo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Gaarekwe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tsholo@gmail.com"
              required
            />
          </div>

          <button type="submit" className="pay-now-button">
            {paymentOption === 'later' ? 'Reserve Room' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
