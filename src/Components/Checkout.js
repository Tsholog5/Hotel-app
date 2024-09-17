import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
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
    <div className="checkout-container">
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

export default Checkout;
