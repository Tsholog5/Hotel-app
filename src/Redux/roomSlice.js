import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch data (rooms in this case)
export const fetchData = createAsyncThunk('rooms/fetchData', async () => {
  const response = await fetch('your_api_endpoint_here'); // replace with your API endpoint
  if (!response.ok) throw new Error('Failed to fetch rooms');
  return await response.json();
});

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addRoom: (state, action) => {
      state.data.push(action.payload);
    },
    clearReservation: (state) => {
      // Add logic for clearing reservations if needed
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Assuming payload is the array of rooms
      })
      .addCase(fetchData.rejected, (state, action) => {  // Corrected this case
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectData = (state) => state.rooms.data;
export const selectLoading = (state) => state.rooms.loading;
export const selectError = (state) => state.rooms.error;

// Export the addRoom action
export const { addRoom, clearReservation } = roomSlice.actions;

export default roomSlice.reducer;
