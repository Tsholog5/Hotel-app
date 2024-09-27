// src/Redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        loading: false,
        error: null,
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Exporting the actions
export const { setUserInfo, setLoading, setError } = userSlice.actions;

// Exporting the reducer
export default userSlice.reducer;
