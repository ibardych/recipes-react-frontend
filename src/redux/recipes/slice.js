import { createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  getRecipesByCategory,
  getRecipesByCategoryList,
} from './operations';

const initialState = {
  categories: [],
  error: null,
  isLoading: false,
  recipesMainPage: [],
  recipesByCategory: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecipesByCategoryList.fulfilled, (state, action) => {
        state.recipesMainPage = action.payload;
      })
      .addCase(getRecipesByCategoryList.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
        state.recipesByCategory = action.payload;
      })
      .addCase(getRecipesByCategory.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
