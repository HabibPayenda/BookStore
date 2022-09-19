import { configureStore } from '@reduxjs/toolkit';
import books from './Books/books';

const store = configureStore({
  reducer: {
    books,
  },
});

export default store;
