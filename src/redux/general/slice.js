import { createSlice } from '@reduxjs/toolkit';
import { recipeInitialValues } from 'constants';

const initialState = {
  themeMode: 'light',
  deviceType: null,
  modalOpened: false,
  modalClosing: false,
  newRecipe: recipeInitialValues,
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
    toggleModal(state, action) {
      state.modalOpened = !state.modalOpened;
      state.modalClosing = false;
    },
    setModalOpened(state, action) {
      state.modalOpened = action.payload;
      state.modalClosing = false;
    },
    setModalClosing(state, action) {
      state.modalClosing = true;
    },
  },
});

export const {
  setThemeMode,
  setDeviceType,
  setNewRecipe,
  toggleModal,
  setModalOpened,
  setModalClosing,
} = generalSlice.actions;
export const generalReducer = generalSlice.reducer;
