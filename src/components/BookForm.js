import React from 'react';

const BookForm = () => (
  <div className="formContainer">
    <p className="addBook">Add Book</p>
    <input type="text" placeholder="Book Title" />
    <input type="text" placeholder="Book Author" />
    <button className="formBtn" type="button">
      Add Book
    </button>
  </div>
);

export default BookForm;
