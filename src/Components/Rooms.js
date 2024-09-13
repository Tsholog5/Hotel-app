import React, { useState } from 'react';
import './Rooms.css';
import superiorroom from '../Components/superior room.jpg';
import deluxroom from '../Components/Delux room.jpg';
import superdeluxroom from '../Components/super delux room.jpg';
import executivesuite from '../Components/Executive suite.jpg';

const Rooms = () => {
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomRatesVisibility, setRoomRatesVisibility] = useState({});

  const handleContinue = () => {
    console.log("User continues to book");
    navigate("/homepage");
  };

  const handlebooknowbutton = () => {
    console.log("User book now");
    navigate("/bookings");
  };

  const handleToggleViewRates = (roomType) => {
    setRoomRatesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [roomType]: !prevVisibility[roomType]
    }));
  };

  const roomsData = [
    {
      roomType: 'Superior Room',
      image: superiorroom,
      description:
        'The superior room is a well-proportioned room, elegant and impressive for a relaxed night away at VIEWS BOUTIQUE HOTEL.',
      standardRate: 1955,
    },
    {
      roomType: 'Deluxe Room',
      image: deluxroom,
      description:
        'Experience unparalleled luxury in our Deluxe room, where elegance meets comfort.',
      standardRate: 2244,
    },
    {
      roomType: 'Super Deluxe Room',
      image: superdeluxroom,
      description:
        'Step into a world of unparalleled luxury with our Super Deluxe Room.',
      standardRate: 2690,
    },
    {
      roomType: 'Executive Suite',
      image: executivesuite,
      description:
        'Elevate your stay in our Executive Suite, where business meets pleasure.',
      standardRate: 3229,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your stay: Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Guests: ${guests}`);
  };

  return (
    <div className="rooms-page">
      <div className="stay-controls">
        <div className="stay-dates">
          <label>
            Check-In:
            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
          </label>
          <label>
            Check-Out:
            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
          </label>
          <label>
            Guests:
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="" disabled>Select Guests</option>
              {[...Array(15).keys()].map(num => (
                <option key={num + 1} value={num + 1}>{num + 1} Guests</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="your-stay-form">
        <h3>Your Stay</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Check-In: {checkInDate}</label>
          </div>
          <div className="form-group">
            <label>Check-Out: {checkOutDate}</label>
          </div>
          <div className="form-group">
            <label>Guests: {guests}</label>
          </div>
          <button className="continue-button">Continue</button>
        </form>
      </div>

      <div className="room-selection">
        <h2>SELECT A ROOM</h2>
        <div className="room-cards">
          {roomsData.map((room) => (
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
                    <button className="book-now-button">Book Now</button>
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
