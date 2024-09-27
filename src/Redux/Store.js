import { configureStore , combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import dbSlice from '../Redux/dbSlice';
import adminReducer from '../Redux/adminSlice';
import roomReducer from '../Redux/roomSlice';

const rootReducer =combineReducers({
  auth: authReducer,
  data: dbSlice,
  admin: adminReducer,
  rooms: roomReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
    
  });





