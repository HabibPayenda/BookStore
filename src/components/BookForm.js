import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addBook } from '../Redux/Books/books';

const BookForm = () => {
  const books = useSelector((store) => store.books.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div className="formContainer">
      <p className="addBook">Add Book</p>
      <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button className="formBtn" type="button" onClick={() => dispatch(addBook({ id: books.length + 1, title, author }))}>
        Add Book
      </button>
    </div>
  );
};

export default BookForm;
