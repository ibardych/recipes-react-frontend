import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
  addRecipeToFavorite,
  removeRecipeFromFavorite,
  updateUserData,
} from './operations';

const initialState = {
  user: {
    id: null,
    email: null,
    username: null,
    avatarURL: null,
    gravatar: null,
    shoppingList: [],
    favoriteRecipeIds: [],
  },
  error: null,
  isRefreshing: false,
  isLoggedIn: false,
  authError: null,
  updateUserDataLoading: false,
  toggleFavoriteLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user.id = user.id;
        state.user.username = user.username;
        state.user.email = user.email;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user.id = user.id;
        state.user.username = user.username;
        state.user.email = user.email;
        state.user.avatarURL = user.avatarURL;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.authError = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null };
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
      })
      .addCase(addIngredientToShoppingList.pending, state => {})
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.user.shoppingList = action.payload.shoppingList;
      })
      .addCase(addIngredientToShoppingList.rejected, state => {})
      .addCase(removeIngredientFromShoppingList.pending, state => {})
      .addCase(removeIngredientFromShoppingList.fulfilled, (state, action) => {
        state.user.shoppingList = action.payload.shoppingList;
      })
      .addCase(removeIngredientFromShoppingList.rejected, state => {})
      .addCase(addRecipeToFavorite.pending, (state, action) => {
        state.toggleFavoriteLoading = true;
      })
      .addCase(addRecipeToFavorite.fulfilled, (state, action) => {
        state.user.favoriteRecipeIds = action.payload.favoriteRecipeIds;
        state.toggleFavoriteLoading = false;
      })
      .addCase(addRecipeToFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.toggleFavoriteLoading = false;
      })
      .addCase(removeRecipeFromFavorite.pending, (state, action) => {
        state.toggleFavoriteLoading = true;
      })
      .addCase(removeRecipeFromFavorite.fulfilled, (state, action) => {
        state.user.favoriteRecipeIds = action.payload.favoriteRecipeIds;
        state.toggleFavoriteLoading = false;
      })
      .addCase(removeRecipeFromFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.toggleFavoriteLoading = false;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.updateUserDataLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        const { avatarURL, username, gravatar } = action.payload;
        state.user.avatarURL = avatarURL;
        state.user.username = username;
        state.user.gravatar = gravatar;
        state.updateUserDataLoading = false;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
