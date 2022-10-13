import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authInitialState = { isAuthenticated: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    isLogging(state, action) {
      state.isAuthenticated = action.payload;
    },

    isLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;
