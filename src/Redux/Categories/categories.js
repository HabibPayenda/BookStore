/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter((book) => book.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeBook, addBook } = categoriesSlice.actions;

export default categoriesSlice.reducer;
