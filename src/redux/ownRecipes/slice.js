import { createSlice } from '@reduxjs/toolkit';
import { createOwnRecipe } from './operations';

const initialState = {
  error: null,
  isLoading: false,
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createOwnRecipe.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(createOwnRecipe.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const ownRecipesReducer = ownRecipesSlice.reducer;
