import React from 'react';
import { useDispatch } from 'react-redux';

import propTypes from 'prop-types';

import { removeBook } from '../Redux/Books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <div className="bookCardLeft">
        <p className="genere">Action</p>
        <p className="title">
          {title}
        </p>
        <p className="author">
          {author}
        </p>
        <div className="btnContainer">
          <button className="btn" type="button">
            Comments
          </button>
          <button className="removeBtn btn" type="button" onClick={() => dispatch(removeBook(id))}>
            Remove Book
          </button>
          <button className="btn" type="button">
            Edit
          </button>
        </div>
      </div>

      <div className="bookCardMiddle">
        <div>
          <h4>64%</h4>
          <p>Completed</p>
        </div>
      </div>

      <div className="bookCardRight">
        <p className="chapter">
          current chapter
        </p>
        <p className="chapterNumber">
          chapter 17
        </p>
        <button type="button" className="chapterButton">
          update progress
        </button>
      </div>

    </div>
  );
};
Book.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Book;
