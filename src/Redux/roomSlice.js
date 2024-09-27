// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { db } from '../Config/Firebase';

// // Async thunk to fetch rooms from Firestore
// export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
//   const response = await db.collection('rooms').get();
//   return response.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// });

// // Async thunk to add a new room to Firestore
// export const addRoom = createAsyncThunk('rooms/addRoom', async (formData) => {
//   const newRoomRef = await db.collection('rooms').add(formData);
//   const newRoom = await newRoomRef.get();
//   return { id: newRoomRef.id, ...newRoom.data() };
// });

// // Async thunk to update a room in Firestore
// export const updateRoom = createAsyncThunk('rooms/updateRoom', async ({ id, formData }) => {
//   await db.collection('rooms').doc(id).update(formData);
//   const updatedRoom = await db.collection('rooms').doc(id).get();
//   return { id, ...updatedRoom.data() };
// });

// // Async thunk to delete a room from Firestore
// export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async (id) => {
//   await db.collection('rooms').doc(id).delete();
//   return id;
// });

// // Create room slice
// const roomSlice = createSlice({
//   name: 'rooms',
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRooms.fulfilled, (state, action) => {
//         return action.payload; // Set the fetched rooms
//       })
//       .addCase(addRoom.fulfilled, (state, action) => {
//         state.push(action.payload); // Add new room to the state
//       })
//       .addCase(updateRoom.fulfilled, (state, action) => {
//         const index = state.findIndex(room => room.id === action.payload.id);
//         if (index !== -1) {
//           state[index] = action.payload; // Update room in the state
//         }
//       })
//       .addCase(deleteRoom.fulfilled, (state, action) => {
//         return state.filter(room => room.id !== action.payload); // Remove deleted room
//       });
//   },
// });

// // Selectors
// export const selectRooms = (state) => state.rooms;

// // Export the reducer
// export default roomSlice.reducer;
