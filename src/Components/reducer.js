// reducer.js
import { SELECT_BOOKING } from './actions';

const initialState = {
  bookings: [],
  selectedBooking: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'UPDATE_BOOKINGS':
      return { ...state, bookings: action.payload };
    case 'DELETE_BOOKING':
      const updatedBookings = state.bookings.filter((_, index) => index !== action.payload);
      return { ...state, bookings: updatedBookings };
    case SELECT_BOOKING:
      return { ...state, selectedBooking: action.payload };
    default:
      return state;
  }
};

export default bookingReducer;
