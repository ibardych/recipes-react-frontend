import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKAND_BASEURL;

export const getCategories = createAsyncThunk(
  'recipes/category-list',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get('/recipes/category-list');

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
      const result = await axios.post('/recipes/main-page', categories);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getRecipesByCategory = createAsyncThunk(
  'recipes/category',
  async (category, thunkAPI) => {
    try {
      const result = await axios.get(`/recipes/category/${category}`);

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
      const result = await axios.get(`/recipes/${recipeId}`);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const findRecipes = createAsyncThunk(
  'recipes/search',
  async (data, thunkAPI) => {
    try {
      const result = await axios.post(`/search?page=1&limit=8`, data);

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
      const result = await axios.get(`/favorite?page=${page}&limit=${limit}`);

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
      const result = await axios.get(
        `/recipes/popular?page=${page}&limit=${limit}`
      );

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
