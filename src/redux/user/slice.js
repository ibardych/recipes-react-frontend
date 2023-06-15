import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: {
    email: null,
    username: null,
    avatarURL: null,
    id: null,
  },
  error: null,
  token: null,
  isRefreshing: true,
  isLoggedIn: false,
  authError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { token, user } = action.payload.user;
        state.user.id = user.id;
        state.user.username = user.username;
        state.user.email = user.email;
        state.token = token;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        state.user.id = user.id;
        state.user.username = user.username;
        state.user.email = user.email;
        state.token = token;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const { setSelectedDate, setUserData, deleteUserData } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
