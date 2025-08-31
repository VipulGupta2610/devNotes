// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialAuthUser = localStorage.getItem("Users");
const parsedUser = initialAuthUser ? JSON.parse(initialAuthUser) : null;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: parsedUser,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("Users", JSON.stringify(action.payload));
        },
        logoutUser: (state) => {
         
            state.user = null;
            localStorage.removeItem("Users");
    
        }
    }
});

export const { setAuthUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;