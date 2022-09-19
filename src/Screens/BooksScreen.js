import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <Header />
      <div className="booksContainer">
        { books && books.map((book) => (
          <Book key={book.id} id={book.id} title={book.title} author={book.author} />
        ))}

        <BookForm />
      </div>
    </>

  );
};
export default Books;
