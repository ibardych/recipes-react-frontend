import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeMode: 'light',
  deviceType: null,
  modalOpened: false,
  newRecipe: {
    image: '',
    title: '',
    description: '',
    instructions: '',
    category: '',
    time: '',
    ingredients: [],
  },
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setThemeMode(state, action) {
      state.themeMode = action.payload;
    },
    setDeviceType(state, action) {
      state.deviceType = action.payload;
    },
    setNewRecipe(state, action) {
      state.newRecipe = action.payload;
    },
  },
});

export const { setThemeMode, setDeviceType, setNewRecipe } =
  generalSlice.actions;
export const generalReducer = generalSlice.reducer;
