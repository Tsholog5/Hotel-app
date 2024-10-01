// roomSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase';

const initialState = {
    data: [],
    loading: false,
    error: null,
    reservedRoom: null,
    bookings: [],
};

// Create room slice
const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setData(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        reserveRoom(state, action) {
            state.reservedRoom = action.payload;
        },
        clearReservation(state) {
            state.reservedRoom = null;
        },
        addBookingSuccess(state, action) {
            state.bookings.push(action.payload);
            state.loading = false;
        },
        setBookingData(state, action) {
            state.bookings = action.payload;
            state.loading = false;
        },
        removeRoom(state, action) {
            state.data = state.data.filter(room => room.id !== action.payload);
        },
        updateRoom(state, action) {
            const index = state.data.findIndex(room => room.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
    },
});

// Selector to get the rooms data
export const selectRooms = (state) => state.room.data;
export const selectBookings = (state) => state.room.bookings; // Selector for bookings

export const {
    setLoading,
    setData,
    setError,
    reserveRoom,
    clearReservation,
    addBookingSuccess,
    setBookingData,
    removeRoom,
    updateRoom,
} = roomSlice.actions;

export default roomSlice.reducer;

// Async actions to handle Firebase interactions

// Fetch rooms from Firestore
export const fetchRooms = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Rooms"));
        const roomsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch(setData(roomsData));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Add a new room to Firestore
export const addRoom = (roomData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "Rooms"), roomData);
        dispatch(setData({ id: docRef.id, ...roomData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Delete a room from Firestore
export const deleteRoom = (id) => async (dispatch) => {
    dispatch(setLoading());
    try {
        await deleteDoc(doc(db, "Rooms", id));
        dispatch(removeRoom(id));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Update a room in Firestore
export const updateRoomAsync = (roomData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        await updateDoc(doc(db, "Rooms", roomData.id), roomData);
        dispatch(updateRoom(roomData)); // Update the state with the new room data
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Add a booking to Firestore
export const addBookings = (bookingData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "Bookings"), bookingData);
        dispatch(addBookingSuccess({ id: docRef.id, ...bookingData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Fetch bookings from Firestore
export const fetchBookings = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const querySnapshot = await getDocs(collection(db, "Bookings"));
        const bookingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch(setBookingData(bookingsData));
    } catch (error) {
        dispatch(setError(error.message));
    }
};
