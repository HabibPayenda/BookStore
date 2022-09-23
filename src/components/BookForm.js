import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addBook } from '../Redux/Books/books';

// {
//   "item_id": "item1",
//   "title": "The Great Gatsby",
//   "author": "John Smith",
//   "category": "Fiction"
// }

const BookForm = () => {
  const books = useSelector((store) => store.books.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    dispatch(addBook({
      item_id: books.length + 1, title, author, category: 'new',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="formContainer">
      <p className="addBook">Add new Book</p>
      <input className="titleInput" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="authorInput" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button
        className="formBtn"
        type="button"
        onClick={() => handleAddBook()}
      >
        Add Book
      </button>
    </div>
  );
};

export default BookForm;
