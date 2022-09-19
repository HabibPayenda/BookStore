/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [{ id: 1, title: 'Zero to One', author: 'unknown' }, { id: 2, title: 'Swipe to Unlock', author: 'unknown' }],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
