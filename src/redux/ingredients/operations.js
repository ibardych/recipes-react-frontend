import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/user/operations';

export const searchIngredients = createAsyncThunk(
  'ingredients/search',
  async (ingredient, thunkAPI) => {
    try {
      const result = await instance.post('/ingredients/search', ingredient);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
