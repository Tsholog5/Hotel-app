import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, setLoading, setError } from '../Redux/userSlice'; // Adjust the path if necessary
import { db, auth } from '../Admin/FirebaseService'; // Firebase service imports
import { doc, getDoc } from 'firebase/firestore'; 
import { onAuthStateChanged } from 'firebase/auth'; // For auth state tracking

const UserProfile = () => {
    const dispatch = useDispatch();
    const { userInfo, loading, error } = useSelector((state) => state.user || {}); // Ensure state.user is not undefined

    // Track authenticated user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                dispatch(setUserInfo({ uid: currentUser.uid, email: currentUser.email }));
            }
        });

        return () => unsubscribe(); // Clean up the subscription
    }, [dispatch]);

    const fetchUserData = async () => {
        try {
            dispatch(setLoading(true));
            const userId = auth.currentUser.uid; // Get the current user's ID
            const userDoc = await getDoc(doc(db, 'users', userId)); // Fetch user data from Firestore

            if (userDoc.exists()) {
                dispatch(setUserInfo({ id: userId, ...userDoc.data() })); // Update user info in Redux
            } else {
                console.log('No user data found');
            }
        } catch (err) {
            dispatch(setError(err.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (userInfo && userInfo.email) {
            fetchUserData();  // Fetch user data when the user is authenticated
        }
    }, [dispatch, userInfo]);

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
