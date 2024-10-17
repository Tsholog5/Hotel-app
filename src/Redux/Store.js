import { configureStore , combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import roomSlice from './dbSlice.js';
import adminReducer from './adminSlice';
import roomReducer from './roomSlice';

const rootReducer =combineReducers({
  auth: authReducer,
  room: roomSlice,
  admin: adminReducer,
  rooms: roomReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
    
  });





