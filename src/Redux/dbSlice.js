import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase';

const initialState = {
    user: null,           
    data: [],             
    loading: false,      
    error: null,          
    reservedRoom: null,   
    bookings: [],         
    rooms: [],            
    favorites: []         
};

const dbSlice = createSlice({
    name: 'db',
    initialState,
    reducers: {
        
        setLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },

        
        setUser(state, action) {
            state.user = action.payload;
        },
        selectUser: (state) => state.user,

       
        setData(state, action) {
            state.data = action.payload;
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
    setError,
    setUser,
    selectUser,
    setData,
    reserveRoom,
    clearReservation,
    addBookingSuccess,
    setBookingData
} = dbSlice.actions;

export default dbSlice.reducer;


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


export const getBookings = () => async (dispatch) => {
    dispatch(setLoading());
    console.log("Fetching bookings...");
    try {
        const querySnapshot = await getDocs(collection(db, "Bookings"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("Fetched bookings data: ", data); 
        dispatch(setData(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};
