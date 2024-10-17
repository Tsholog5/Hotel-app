// src/AdminProfile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './Redux/adminSlice';
import { db } from './Config/FirebaseService';
import { collection, getDocs } from 'firebase/firestore';

const AdminProfile = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = collection(db, "users"); // Change "users" to your actual collection name
            const usersSnapshot = await getDocs(usersCollection);
            const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch(setUsers(usersList));
        };

        fetchUsers();
    }, [dispatch]);

    return (
        <div className="admin-profile">
            <h2>Users</h2>
            {users.map((user) => (
                <div key={user.id} className="user-info">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Room Type:</strong> {user.roomType}</p>
                    <p><strong>Guests:</strong> {user.guests}</p>
                    <p><strong>Total Amount:</strong> R{user.totalAmount}</p>
                </div>
            ))}
        </div>
    );
};

export default AdminProfile;
