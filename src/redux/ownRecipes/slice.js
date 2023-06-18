import { createSlice } from '@reduxjs/toolkit';
import { createOwnRecipe, deleteOwnRecipe, getOwnRecipes } from './operations';

const initialState = {
  createdRecipe: [],
  recipes: [],
  error: null,
  isLoading: false,
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createOwnRecipe.fulfilled, (state, action) => {
        const recipe = action.payload;
        state.createdRecipe = recipe;
        state.recipes.push(recipe);
        state.isLoading = false;
      })
      .addCase(createOwnRecipe.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getOwnRecipes.fulfilled, (state, action) => {
        const recipes = action.payload;
        state.recipes = recipes.map(recipe => {
          return { ...recipe, instructions: recipe.instructions.split('\r\n') };
        });
        state.isLoading = false;
      })
      .addCase(getOwnRecipes.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteOwnRecipe.fulfilled, (state, action) => {
        const { _id } = action.payload.recipe;
        state.recipes = state.recipes.filter(recipe => recipe._id !== _id);
        state.isLoading = false;
      })
      .addCase(deleteOwnRecipe.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const ownRecipesReducer = ownRecipesSlice.reducer;
