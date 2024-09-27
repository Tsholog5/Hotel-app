// src/Components/UserProfile.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, setLoading, setError } from '../Redux/userSlice'; // Adjust the path if necessary
import { db, auth } from '../Admin/FirebaseService';
import { doc, getDoc } from 'firebase/firestore';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { userInfo, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        const fetchUserData = async () => {
            dispatch(setLoading(true));
            try {
                const userId = auth.currentUser.uid; // Get the current user's ID
                const userDoc = await getDoc(doc(db, 'users', userId)); // Fetch user data from Firestore
                
                if (userDoc.exists()) {
                    dispatch(setUserInfo({ id: userId, ...userDoc.data() })); // Update user info in Redux
                } else {
                    dispatch(setError('No user data found'));
                }
            } catch (err) {
                dispatch(setError(err.message));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchUserData();
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User Profile</h1>
            {userInfo ? (
                <div>
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone:</strong> {userInfo.phone}</p>
                    <p><strong>Address:</strong> {userInfo.address}</p>
                </div>
            ) : (
                <p>No user information available</p>
            )}
        </div>
    );
};

export default UserProfile;
