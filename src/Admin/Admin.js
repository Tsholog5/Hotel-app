import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookings,setData,setLoading,setError } from "../Redux/dbSlice";
import AddRoomForm from "../Components/AddRoomForm";
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const dispatch = useDispatch();
  
  // const bookings = useSelector((state) => state.room?.bookings || []);
  const {data,loading,error,reservedRoom,bookings,rooms} = useSelector((state) => state.room);

  // Fetch bookings when the component mounts
  // useEffect(() => {
  //     // Fetch bookings
  //     getBookings(dispatch)
  //   console.log(data)
  // },[]);

  // Log bookings when they change
  // useEffect(() => {
  //   console.log("Bookings fetched from Redux store:", data);
  // });

  // const deleteRoom = (roomId) => {
  //   console.log(`Deleting room with id: ${roomId}`);
  //   // Add your actual delete logic here
  // };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="admin-dashboard">
<aside className="sidebar">
<h2>Admin Panel</h2>
<ul className="sidebar-nav">
  <li className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabClick("overview")}>Overview</li>
  <li className={activeTab === "manage-users" ? "active" : ""} onClick={() => handleTabClick("manage-users")}>Manage Users</li>
  <li className={activeTab === "manage-content" ? "active" : ""} onClick={() => handleTabClick("manage-content")}>Manage Rooms</li>
  <li className={activeTab === "reservations" ? "active" : ""} onClick={() => {handleTabClick("reservations");getBookings(dispatch)}}>Reservations</li>
</ul>
</aside>

<main>
{activeTab === "overview" && (
  <section>
    <h2>Overview</h2>
    <p>Summary of admin activities.</p>
  </section>
)}

{activeTab === "manage-users" && (
  <section>
    <h2>Manage Users</h2>
    <p>View, edit, or remove users from the system.</p>
  </section>
)}

{activeTab === "manage-content" && (
  <section>
    <h2>Manage Rooms</h2>
    <AddRoomForm />
    {data.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((room) => (
            <tr key={room.id}>
              <td>{room.roomName}</td>
              <td>{room.price}</td>
              <td>
                <button onClick={() => {/* edit room logic */}}>Edit</button>
                {/* <button onClick={() => deleteRoom(room.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No rooms available</p>
    )}
  </section>
)}

{activeTab === "reservations" && (
  <section>
    <h2>Reservations</h2>
    {data.length > 0 ? (
       <table>
       <thead>
         <tr>
           <th>Email</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Check-in</th>
           <th>Check-out</th>
           <th>Guests</th>
           <th>Room Type</th>
           <th>Total Price</th>
           <th>Paid</th>
           <th>Transaction ID</th>
         </tr>
       </thead>
       <tbody>
      {data.map((booking) => (
        <tr key={booking.transactionId}>
          <td>{booking.email}</td>
          <td>{booking.firstName}</td>
          <td>{booking.lastName}</td>
          <td>{booking.checkin}</td>
          <td>{booking.checkout}</td>
          <td>{booking.guests}</td>
          {/* Specify which property of the roomType object to render */}
          <td>{booking.roomType.roomType}</td> 
          <td>R{booking.totalPrice}</td>
          <td>{booking.paid}</td>
          <td>{booking.transactionId}</td>
        </tr>
      ))}
    </tbody>
     </table>
    ) : (
      <p>No reservations available</p>
    )}
  </section>
)}
</main>

    </div>
  );
};

export default Admin;
