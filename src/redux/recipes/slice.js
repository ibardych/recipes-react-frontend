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
  categoriesLoading: false,
  error: null,
  isLoading: false,
  recipesMainPage: [],
  recipesMainPageLoading: [],
  recipe: [],
  recipeLoading: false,
  recipesByCategory: {
    recipes: [],
    total: null,
  },
  recipesByCategoryLoading: false,
  favoriteRecipes: {
    recipes: [],
    total: null,
  },
  popularRecipes: {
    recipes: [],
    total: null,
  },
  searchRecipes: {
    filter: 'title',
    filterName: 'Title',
    query: '',
    recipes: [],
    total: null,
  },
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.categoriesLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(getRecipesByCategoryList.pending, (state, action) => {
        state.recipesMainPageLoading = true;
      })
      .addCase(getRecipesByCategoryList.fulfilled, (state, action) => {
        state.recipesMainPage = action.payload;
        state.recipesMainPageLoading = false;
      })
      .addCase(getRecipesByCategoryList.rejected, (state, action) => {
        state.error = action.payload;
        state.recipesMainPageLoading = false;
      })
      .addCase(getRecipesByCategory.pending, (state, action) => {
        state.recipesByCategoryLoading = true;
      })
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
        state.recipesByCategory = action.payload;
        state.recipesByCategoryLoading = false;
      })
      .addCase(getRecipesByCategory.rejected, (state, action) => {
        state.error = action.payload;
        state.recipesByCategoryLoading = false;
      })
      .addCase(getRecipeById.pending, (state, action) => {
        state.recipeLoading = true;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        const data = action.payload;
        const ingredients = data.ingredients.map(item => {
          const { _id, name, desc, img } = item.id;
          const newitem = { _id, name, desc, img, measure: item.measure };
          return newitem;
        });
        const recipe = { ...data, ingredients };
        const time = recipe.time.replace('time', '').trim() + ' min';
        const instructions = recipe.instructions.split('\r\n');
        state.recipe = {
          ...recipe,
          instructions: instructions.filter(item => item !== ''),
          time,
        };
        state.recipeLoading = false;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.error = action.payload;
        state.recipeLoading = false;
      })
      .addCase(findRecipes.fulfilled, (state, action) => {
        const { recipes, total } = action.payload;
        state.searchRecipes.recipes = recipes;
        state.searchRecipes.total = total;
      })
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
  reducers: {
    setSearchData(state, action) {
      state.searchRecipes = { ...state.searchRecipes, ...action.payload };
    },
  },
});

export const { setSearchData } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
