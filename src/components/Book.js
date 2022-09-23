import React from 'react';
import { useDispatch } from 'react-redux';

import propTypes from 'prop-types';

import { removeBook } from '../Redux/Books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <p className="title">
        {title}
      </p>
      <p className="author">
        {author}
      </p>
      <button className="removeBtn" type="button" onClick={() => dispatch(removeBook(id))}>
        Remove Book
      </button>
    </div>
  );
};
Book.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Book;
