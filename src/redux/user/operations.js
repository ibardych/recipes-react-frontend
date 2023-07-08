import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASENAME from 'constants/basename';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKAND_BASEURL,
});

const setAuthHeader = token => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.authorization = null;
};

// instance.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem('accessToken');
//   config.headers.common.authorization = `Bearer ${accessToken}`;
//   return config;
// });

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      await instance.post('/auth/register', credentials);
      const { email, password } = credentials;
      const resLogin = await instance.post('/auth/login', { email, password });

      localStorage.setItem('accessToken', resLogin.accessToken);
      localStorage.setItem('refreshToken', resLogin.refreshToken);

      setAuthHeader(resLogin.data.accessToken);

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
      const res = await instance.post('/auth/login', credentials);
      const { accessToken, refreshToken } = res.data;
      setAuthHeader(accessToken);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/auth/logout');
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/current',
  async (_, { getState, rejectWithValue }) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(accessToken);
      const res = await instance.get('/auth/current');
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
      const res = await instance.post('/shopping-list/add', data);

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
      const res = await instance.delete(`/shopping-list/${id}`);

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
      const result = await instance.post('/favorite', { recipeId });

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
      const result = await instance.delete(`/favorite/${recipeId}`);

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
      const result = await instance.patch(`/auth/update`, data);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/auth/refresh', { refreshToken });
        setAuthHeader(data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
        // localStorage.setItem('refreshToken', data.refreshToken);
        error.config.headers.authorization = `Bearer ${data.accessToken}`;

        if (error.config.url !== '/auth/current') {
          return instance(error.config);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response.status === 403 && localStorage.getItem('accessToken')) {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('accessToken', '');
      window.location.replace(`${BASENAME}/signin`);
    }
    return Promise.reject(error);
  }
);

export default instance;
