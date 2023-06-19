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
  token: null,
  isRefreshing: true,
  isLoggedIn: false,
  authError: null,
  updateUserDataLoading: false,
  toggeIngredientLoading: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { token, user } = action.payload;
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
      .addCase(addRecipeToFavorite.fulfilled, (state, action) => {
        state.user.favoriteRecipeIds = action.payload.favoriteRecipeIds;
      })
      .addCase(addRecipeToFavorite.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeRecipeFromFavorite.fulfilled, (state, action) => {
        state.user.favoriteRecipeIds = action.payload.favoriteRecipeIds;
      })
      .addCase(removeRecipeFromFavorite.rejected, (state, action) => {
        state.error = action.payload;
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
  reducers: {
    setIngredientLoading(state, action) {
      const ingredientId = action.payload;
      state.toggeIngredientLoading = ingredientId;
    },
  },
});

export const { setIngredientLoading } = userSlice.actions;
export const userReducer = userSlice.reducer;
