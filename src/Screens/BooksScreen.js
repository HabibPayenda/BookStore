import React, { useState } from 'react';

import Header from '../components/Header';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

const Books = () => {
  const [books] = useState([]);
  return (
    <>
      <Header />
      <div className="booksContainer">
        {
         books.map((book) => (
           <Book key={book.id} tilte={book.tilte} author={book.author} />
         ))
       }

        <BookForm />
      </div>
    </>

  );
};
export default Books;
