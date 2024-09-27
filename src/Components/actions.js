// actions.js
export const SELECT_BOOKING = 'SELECT_BOOKING';

export const selectBooking = (booking) => ({
  type: SELECT_BOOKING,
  payload: booking,
});
