import React, { useState, useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { addRoom, deleteRoom, updateRoom, fetchRooms, selectRooms } from "../Redux/roomSlice"; 
import { db, storage } from '../Config/Firebase'; // Ensure to import storage
import { collection, getDocs } from 'firebase/firestore'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import required functions from storage
import "./Admin.css";

const Admin = () => {
    const [bookings, setBookings] = useState([]);
    const dispatch = useDispatch();
    const rooms = useSelector(selectRooms); 
    const [roomName, setRoomName] = useState("");
    const [guests, setGuests] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [image, setImage] = useState(null);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            const bookingsCollection = collection(db, 'Bookings'); 
            const bookingsSnapshot = await getDocs(bookingsCollection); 
            const bookingsData = bookingsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBookings(bookingsData);
        };

        fetchBookings();
        dispatch(fetchRooms());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!roomName || !price || !image) { 
            alert("All fields are required!");
            return;
        }

        // Upload image to Firebase Storage
        const storageRef = ref(storage, `rooms/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(snapshot.ref); // Get the URL of the uploaded image

        const formData = {
            roomName,
            guests,
            duration,
            price,
            image: imageUrl // Use the image URL
        };

        if (editingId) {
            dispatch(updateRoom({ id: editingId, ...formData }));
        } else {
            dispatch(addRoom(formData));
        }

        clearForm();
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this room?")) {
            dispatch(deleteRoom(id));
        }
    };

    const handleEdit = (room) => {
        setEditingId(room.id);
        setRoomName(room.roomName);
        setGuests(room.guests);
        setPrice(room.price);
        setDuration(room.duration);
    };

    const clearForm = () => {
        setRoomName("");
        setGuests("");
        setPrice("");
        setDuration("");
        setImage(null); 
        setEditingId(null);
    };

    return (
        <div className="admin-container">
            <h2>Admin Panel - Manage Rooms</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Room Name:</label>
                    <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
                </div>
                <div>
                    <label>Guests:</label>
                    <input type="text" value={guests} onChange={(e) => setGuests(e.target.value)} />
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Room Image:</label>
                    <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <button type="submit">{editingId ? "Update Room" : "Add Room"}</button>
                {editingId && <button type="button" onClick={clearForm}>Cancel Edit</button>}
            </form>

            <h3>Available Rooms</h3>
            <table>
                <thead>
                    <tr>
                        <th>Room</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms && rooms.length > 0 ? (
                        rooms.map((room) => (
                            <tr key={room.id}>
                                <td>{room.roomName}</td>
                                <td>{room.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(room)}>Edit</button>
                                    <button onClick={() => handleDelete(room.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No rooms available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div>
                <h2>All Bookings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>User Email</th>
                            <th>Room Name</th>
                            <th>Check-in Date</th>
                            <th>Check-out Date</th>
                            <th>Guests</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td>{booking.userEmail}</td>
                                <td>{booking.roomName}</td>
                                <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                                <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                                <td>{booking.guests}</td>
                                <td>R{booking.price}</td>
                                <td>{booking.paymentStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
