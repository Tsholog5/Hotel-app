import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase';

const initialState = {
    data: [],
    loading: false,
    error: null,
    reservedRoom: null,
    bookings: [],
    rooms: []
};

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
    },
});

export const {
    setLoading,
    setData,
    setError,
    reserveRoom,
    clearReservation,
    addBookingSuccess,
    setBookingData
} = roomSlice.actions;

export default roomSlice.reducer;

// Add this function to handle adding bookings to Firebase
export const addBookings = (bookingData) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const docRef = await addDoc(collection(db, "Bookings"), bookingData);

        console.log("Document written with ID: ", docRef.id);
        dispatch(addBookingSuccess({ id: docRef.id, ...bookingData }));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Fetch bookings from Firebase
export const getBookings = async (dispatch) => {
    dispatch(setLoading());
    console.log("We are here")
    try {
        const querySnapshot = await getDocs(collection(db, "Bookings"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("Fetched bookings data: ", data); // Log fetched data
        dispatch(setData(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

