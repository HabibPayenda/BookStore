/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
