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
  

  const handleIncreaseGuests = () => {
    setGuests(guests + 1);
  };

  const handleDecreaseGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleViewRates = () => {
    console.log("User views Rates");
    navigate("/Booking");
  };

  

  const handleRooms = () => {
    console.log("User book room");
    navigate("/Booking");
  };

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
        </div>

        <div className="guest-controls">
          <label>Guests:</label>
          <div className="guest-buttons">
          <select
                            className="guest-input"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        >
                            <option value="" disabled>Select Guests</option>
                            {[...Array(15).keys()].map(num => (
                                <option key={num + 1} value={num + 1}>{num + 1} Guests</option>
                            ))}
                        </select>
          </div>
        </div>
      </div>

      <div className="your-stay-form">
        <h3>Your Stay</h3>
        <form onSubmit={handleSubmit}>
          <label>Check-In: {checkInDate}</label>
          <br />
          <label>Check-Out: {checkOutDate}</label>
          <br />
          <label>Number of Guests: {guests}</label>
          <br />
          <button type="submit">Continue</button>
        </form>
      </div>

      <div className="room-selection">
        <h2>Select Room</h2>
        <div className="room-cards">
          <div className="room-card">
            <img src={superiorroom} alt="Superior Room"  />
            <div className="room-info">
              <h4>Superior Room</h4>
              <p>The superior room is a well proportioned room, elegant and impressive for a relaxed night away at 
                 VIEWS BOUTIQUE HOTEL.

                 Complete with a double bed, air conditioned, room service, coffee/tea maker , free WIFI and a cool 
                 but sophisticated decor, it is the ultimate room for work , rest and pleasure.</p>
                 <button className="ViewRates" onClick={handleViewRates}>ViewRates</button>
            </div>
          </div>

          <div className="room-card">
            <img src={deluxroom} alt="Delux room" />
            <div className="room-info">
              <h4>Deluxe Room</h4>
              <p>Experience unparalleled luxury in our Deluxe room, where elegance meets comfort. Enjoy spacious
                 surroundings,exquisite furnishings, and top-notch amenities designed for the ultimate relaxation and 
                 indulgence. Perfect for those seeking a sophisticated escape with a touch of opulence.

                 Complete with 1 king size bed, robe and hair dryer,WIFI and complementary on-site parking. </p>
                 <button className="ViewRates" onClick={handleViewRates}>ViewRates</button>
            </div>
          </div>

          <div className="room-card">
            <img src={superdeluxroom} alt="Super Deluxe Room" />
            <div className="room-info">
              <h4>Super Deluxe Room</h4>
              <p>Step into a world of unparalleled luxury with our Super Deluxe Room. This exquisite retreats boasts an 
                expensive layout,premium furnishings, and lavish amenities designed for those who crave the finest
                in comfort and style. Elevate your stay to new heights of elegance and sophistication. 

                                  
               Complete living/sitting room,separate bathtub and shower , premium movie channels and full 
               business centre onsite.</p>
               <button className="ViewRates" onClick={handleViewRates}>ViewRates</button>
            </div>
          </div>

          <div className="room-card">
            <img src={executivesuite} alt="Executive Suite" />
            <div className="room-info">
              <h4>Executive Suite</h4>
              <p>Elevate your stay in our Executive Suite, where business meets pleasure in perfect harmony. Revel in  elegantly 
                 spacious designed interiors, state-of-the-art amenities, and dedicated workspaces that cater to your ile
                 professional needs while offering unmatched comfort and sophistication for ultimate relaxation.

                 Completed with dining area,separate living room,office set-up,complimentary slippers and 
                 personalised mini bar.</p>
                 <button className="ViewRates" onClick={handleViewRates}>ViewRates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
