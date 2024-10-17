import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoom } from '../Redux/roomSlice'; // Ensure the correct import path

const AddRoomForm = () => {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState('');
  const [roomPrice, setRoomPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addRoom action with the new room data
    dispatch(addRoom({ name: roomName, price: roomPrice }));
    // Reset form fields
    setRoomName('');
    setRoomPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Room Name:</label>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Room Price:</label>
        <input
          type="number"
          value={roomPrice}
          onChange={(e) => setRoomPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoomForm;
