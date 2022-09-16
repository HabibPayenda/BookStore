import React from 'react';

import propTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="bookCard">
    <p className="title">
      {title}
    </p>
    <p className="author">
      {author}
    </p>
    <button className="removeBtn" type="button">
      Remove Book
    </button>
  </div>
);

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Book;
