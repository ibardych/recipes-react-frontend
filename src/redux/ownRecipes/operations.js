import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/user/operations';

export const createOwnRecipe = createAsyncThunk(
  'own-recipes/create',
  async (data, thunkAPI) => {
    try {
      const result = await instance.post('/own-recipes/create', data);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getOwnRecipes = createAsyncThunk(
  'own-recipes',
  async (data, thunkAPI) => {
    try {
      const result = await instance.get('/own-recipes', data);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteOwnRecipe = createAsyncThunk(
  'own-recipes/delete',
  async (recipeId, thunkAPI) => {
    try {
      const result = await instance.delete(`/own-recipes/${recipeId}`);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
