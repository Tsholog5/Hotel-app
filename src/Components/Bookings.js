import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Paypal from '../Components/paypal';
import './Bookings.css';
import { useDispatch, useSelector } from "react-redux";
import { addBookings } from '../Redux/dbSlice';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/Firebase";

const Bookings = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const room = location.state?.room || ''; 
  const checkInDate = location.state?.checkInDate || '';
  const checkOutDate = location.state?.checkOutDate || '';
  const guests = location.state?.guests || '';
  const vat = location.state?.vat || 0;
  const totalAmount = location.state?.totalAmount || 0;

  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  };

  const nights = checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0;

  const bookingData = {
    firstName: user?.firstName || "Guest First Name",
    lastName: user?.lastName || "Guest Last Name",
    email: user?.email || "",
    roomType: room || "Standard",
    checkin: checkInDate,
    checkout: checkOutDate,
    nights: nights,
    guests: guests || 1,
    totalPrice: totalAmount || 0,
    paid: "No",
    transactionId: null,
    payerName: null,
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Payment successful! Your booking is confirmed.');
    navigate("/Checkout"); 
  };

  const addBookingToFirestore = async (bookingData) => {
    try {
      await addDoc(collection(db, "bookings"), bookingData);
      console.log("Booking added to Firestore");
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const updatedBookingData = {
        ...bookingData,
        paid: "Yes",
        transactionId: details.id,
        payerName: details.payer.name.given_name,
        email: details.payer.email_address,
      };
      addBookingToFirestore(updatedBookingData);
      dispatch(addBookings(updatedBookingData));
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    }).catch((err) => {
      console.error("Payment approval error: ", err);
      alert("An error occurred during the payment approval.");
    });
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
          <label htmlFor="nights">Number of Nights:</label>
          <input type="number" id="nights" value={nights} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount:</label>
          <input type="text" id="totalAmount" value={`R${totalAmount.toFixed(2)}`} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="vat">VAT (15%):</label>
          <input type="text" id="vat" value={`R${vat.toFixed(2)}`} readOnly />
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
      </form>

      <div className="paypal-payment">
        <PayPalScriptProvider options={{ "client-id": "Ac5BE6LbIeYHZYca62eZjpI8DlcGBprKXhwMd89igjzVzzqU1CtTfNL-ZNQ6-qq405c8YsdK-SvMpPk4" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalAmount.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={handleApprove}
            onError={(err) => {
              console.error(err);
              alert("An error occurred during the transaction.");
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Bookings;
