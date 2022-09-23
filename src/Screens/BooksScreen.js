import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import { getBooks } from '../Redux/Books/books';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <Header />
      <div className="booksContainer">
        { books && books.map((book) => (
          <Book
            key={book.id || book.item_id}
            id={book.id || book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}

        <hr />

        <BookForm />
      </div>
    </>

  );
};
export default Books;
