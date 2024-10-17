import { createSlice } from '@reduxjs/toolkit';

// Dummy booking data with room type, guests, and total amount
const dummyBookings = [
    { id: 1, guestName: 'John Doe', roomType: 'Deluxe Suite', guests: 2, checkIn: '2023-10-01', checkOut: '2023-10-05', totalAmount: 500 },
    { id: 2, guestName: 'Jane Smith', roomType: 'Standard Room', guests: 1, checkIn: '2023-10-02', checkOut: '2023-10-06', totalAmount: 300 },
    { id: 3, guestName: 'Alice Johnson', roomType: 'Family Room', guests: 4, checkIn: '2023-10-03', checkOut: '2023-10-07', totalAmount: 700 },
    { id: 4, guestName: 'Bob Brown', roomType: 'Luxury Suite', guests: 3, checkIn: '2023-10-04', checkOut: '2023-10-08', totalAmount: 900 },
    { id: 5, guestName: 'Charlie Green', roomType: 'Economy Room', guests: 1, checkIn: '2023-10-05', checkOut: '2023-10-09', totalAmount: 200 },
];

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        bookings: [],
        loading: false,
        error: null,
    },
    reducers: {
        setBookings: (state, action) => {
            state.bookings = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        // Adding a new reducer to set dummy bookings
        fetchDummyBookings: (state) => {
            state.bookings = dummyBookings;
        },
    },
});

// Exporting the actions
export const { fetchDummyBookings, setBookings, setLoading, setError } = adminSlice.actions;

// Exporting the reducer as default
export default adminSlice.reducer;
