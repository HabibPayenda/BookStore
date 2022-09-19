import { configureStore } from '@reduxjs/toolkit';
import books from './Books/books';
import categories from './Categories/categories';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default store;
