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
import { searchFilter } from 'constants';

const initialState = {
  user: {
    email: null,
    username: null,
    avatarURL: null,
    gravatar: null,
    id: null,
    shoppingList: [],
    favoriteRecipeIds: [],
  },
  search: {
    filter: 'title',
    filterName: 'Title',
    query: '',
    recipes: [],
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
      })
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.user.shoppingList = action.payload.shoppingList;
      })
      .addCase(addIngredientToShoppingList.rejected, state => {})
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
      .addCase(updateUserData.fulfilled, (state, action) => {
        const { avatarURL, username, gravatar } = action.payload;
        state.user.avatarURL = avatarURL;
        state.user.username = username;
        state.user.gravatar = gravatar;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
  reducers: {
    setSearch(state, action) {
      const search = { ...action.payload };
      search.filterName = searchFilter[search.filter].name;
      state.search = search;
    },
  },
});

export const { setSearch } = userSlice.actions;
export const userReducer = userSlice.reducer;
