import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKAND_BASEURL;

export const searchIngredients = createAsyncThunk(
  'ingredients/search',
  async (ingredient, thunkAPI) => {
    try {
      const result = await axios.post('/ingredients/search', ingredient);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
