import { createSlice } from '@reduxjs/toolkit';
import {
  findRecipes,
  getCategories,
  getFavoriteRecipes,
  getPopularRecipes,
  getRecipeById,
  getRecipesByCategory,
  getRecipesByCategoryList,
} from './operations';

const initialState = {
  categories: [],
  error: null,
  isLoading: false,
  recipesMainPage: [],
  recipesByCategory: [],
  recipe: [],
  favoriteRecipes: {
    recipes: [],
    total: null,
  },
  popularRecipes: {
    recipes: [],
    total: null,
  },
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
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        const data = action.payload;
        const ingredients = data.ingredients.map(item => {
          const { _id, name, desc, img } = item.id;
          const newitem = { _id, name, desc, img, measure: item.measure };
          return newitem;
        });
        const recipe = { ...data, ingredients };
        state.recipe = {
          ...recipe,
          instructions: recipe.instructions.split('\r\n'),
        };
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(findRecipes.fulfilled, (state, action) => {})
      .addCase(findRecipes.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, action) => {
        state.favoriteRecipes = action.payload;
      })
      .addCase(getFavoriteRecipes.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.popularRecipes = action.payload;
      })
      .addCase(getPopularRecipes.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
