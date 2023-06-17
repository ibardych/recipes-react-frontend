import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKAND_BASEURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/auth/register', credentials);
      const { email, password } = credentials;
      const resLogin = await axios.post('/auth/login', { email, password });

      setAuthHeader(resLogin.data.token);

      return resLogin.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/current',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (state.auth.token === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(state.auth.token);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  'user/shopping-list/add',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/shopping-list/add', data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeIngredientFromShoppingList = createAsyncThunk(
  'user/shopping-list/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/shopping-list/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addRecipeToFavorite = createAsyncThunk(
  'recipes/favorite/add',
  async (recipeId, thunkAPI) => {
    try {
      const result = await axios.post('/favorite', { recipeId });

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  'recipes/favorite/delete',
  async (recipeId, thunkAPI) => {
    try {
      const result = await axios.delete(`/favorite/${recipeId}`);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user/update',
  async (data, thunkAPI) => {
    try {
      const result = await axios.patch(`/auth/update`, data);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
