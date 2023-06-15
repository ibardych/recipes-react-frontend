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
      const result = await axios.get(`/recipes/${category}`);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
