import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectBooking } from '../Components/actions';

import './AdminDashboard.css'; 


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [newBooking, setNewBooking] = useState({ roomNumber: '', clientName: '', checkIn: '', checkOut: '', status: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleAddBooking = () => {
    
    setNewBooking({ roomNumber: '', clientName: '', checkIn: '', checkOut: '', status: '' });
    setEditingIndex(null);
  };

  const handleEditBooking = (index) => {
  
  };

  const bookings = [
    { roomNumber: 101, clientName: 'John Doe', checkIn: '2024-09-20', checkOut: '2024-09-25', status: 'Checked-in' },
    { roomNumber: 102, clientName: 'Jane Smith', checkIn: '2024-09-22', checkOut: '2024-09-30', status: 'Pending' },
    { roomNumber: 103, clientName: 'Alice Lee', checkIn: '2024-09-21', checkOut: '2024-09-29', status: 'Checked-out' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      
      <div style={{ flex: 1, padding: '10px' }}>
        <h3>Booking Details</h3>
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={newBooking.roomNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={newBooking.clientName}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkIn"
          placeholder="Check-in"
          value={newBooking.checkIn}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkOut"
          placeholder="Check-out"
          value={newBooking.checkOut}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={newBooking.status}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBooking}>{editingIndex !== null ? 'Update Booking' : 'Add Booking'}</button>
      </div>

      
      <div style={{ flex: 1, padding: '10px' }}>
        <h3>Table of Bookings</h3>
        <table>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Client Name</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bookings[0].roomNumber}</td>
              <td>{bookings[0].clientName}</td>
              <td>{bookings[0].checkIn}</td>
              <td>{bookings[0].checkOut}</td>
              <td>{bookings[0].status}</td>
              <td>
                <button onClick={() => handleEditBooking(0)}>Edit</button>
                <button onClick={() => dispatch({ type: 'DELETE_BOOKING', payload: 0 })}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>{bookings[1].roomNumber}</td>
              <td>{bookings[1].clientName}</td>
              <td>{bookings[1].checkIn}</td>
              <td>{bookings[1].checkOut}</td>
              <td>{bookings[1].status}</td>
              <td>
                <button onClick={() => handleEditBooking(1)}>Edit</button>
                <button onClick={() => dispatch({ type: 'DELETE_BOOKING', payload: 1 })}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>{bookings[2].roomNumber}</td>
              <td>{bookings[2].clientName}</td>
              <td>{bookings[2].checkIn}</td>
              <td>{bookings[2].checkOut}</td>
              <td>{bookings[2].status}</td>
              <td>
                <button onClick={() => handleEditBooking(2)}>Edit</button>
                <button onClick={() => dispatch({ type: 'DELETE_BOOKING', payload: 2 })}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
