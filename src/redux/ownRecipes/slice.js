import { createSlice } from '@reduxjs/toolkit';
import { createOwnRecipe, deleteOwnRecipe, getOwnRecipes } from './operations';

const initialState = {
  createdRecipe: [],
  recipes: [],
  ownRecipesLoading: false,
  createRecipeLoading: false,
  error: null,
  isLoading: false,
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createOwnRecipe.pending, (state, action) => {
        state.createRecipeLoading = true;
      })
      .addCase(createOwnRecipe.fulfilled, (state, action) => {
        // const recipe = action.payload;
        // state.createdRecipe = recipe;
        // state.recipes = [recipe, ...state.recipes];
        state.createRecipeLoading = false;
      })
      .addCase(createOwnRecipe.rejected, (state, action) => {
        state.error = action.payload;
        state.createRecipeLoading = false;
      })
      .addCase(getOwnRecipes.pending, (state, action) => {
        state.ownRecipesLoading = true;
      })
      .addCase(getOwnRecipes.fulfilled, (state, action) => {
        const recipes = action.payload;
        state.recipes = recipes.map(recipe => {
          return { ...recipe, instructions: recipe.instructions.split('\r\n') };
        });
        state.ownRecipesLoading = false;
      })
      .addCase(getOwnRecipes.rejected, (state, action) => {
        state.error = action.payload;
        state.ownRecipesLoading = false;
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
