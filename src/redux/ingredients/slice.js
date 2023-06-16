import { createSlice } from '@reduxjs/toolkit';
import { searchIngredients } from './operations';

const initialState = {
  foundIngredients: [],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(searchIngredients.fulfilled, (state, action) => {
        state.foundIngredients = action.payload;
        state.isLoading = false;
      })
      .addCase(searchIngredients.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
  reducers: {
    emptyFoundIngredients(state) {
      state.foundIngredients = [];
    },
  },
});

export const { emptyFoundIngredients } = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;
