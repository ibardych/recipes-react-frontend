import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/user/operations';

export const getCategories = createAsyncThunk(
  'recipes/category-list',
  async (_, thunkAPI) => {
    try {
      const result = await instance.get('/recipes/category-list');

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getRecipesByCategoryList = createAsyncThunk(
  'recipes/main-page',
  async (categories, thunkAPI) => {
    try {
      const result = await instance.post('/recipes/main-page', categories);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getRecipesByCategory = createAsyncThunk(
  'recipes/category',
  async (data, thunkAPI) => {
    const { category, page, limit } = data;
    try {
      const result = await instance.get(
        `/recipes/category/${category}?page=${page}&limit=${limit}`
      );

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getRecipeById = createAsyncThunk(
  'recipes/recipeid',
  async (recipeId, thunkAPI) => {
    try {
      const result = await instance.get(`/recipes/${recipeId}`);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const findRecipes = createAsyncThunk(
  'recipes/search',
  async (data, thunkAPI) => {
    const { page, limit } = data;
    try {
      const result = await instance.post(
        `/search?page=${page}&limit=${limit}`,
        data
      );

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'recipes/favorite',
  async (data, thunkAPI) => {
    const { page, limit } = data;
    try {
      const result = await instance.get(
        `/favorite?page=${page}&limit=${limit}`
      );

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  'recipes/popular',
  async (data, thunkAPI) => {
    const { page, limit } = data;
    try {
      const result = await instance.get(
        `/recipes/popular?page=${page}&limit=${limit}`
      );

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
