import { configureStore , combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import dbSlice from '../Redux/dbSlice';

const rootReducer =combineReducers({
  auth: authReducer,
  data: dbSlice,
});

export const store = configureStore({
  reducer: rootReducer,
    
  });





