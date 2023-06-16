import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKAND_BASEURL;

export const createOwnRecipe = createAsyncThunk(
  'own-recipes/create',
  async (data, thunkAPI) => {
    try {
      const result = await axios.post('/own-recipes/create', data);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
