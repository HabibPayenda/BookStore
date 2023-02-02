import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <Link to="book/comments">
            <button className="btn" type="button">
              Comments
            </button>
          </Link>
          <div className="btnLine" />
          <button className="removeBtn btn" type="button" onClick={() => dispatch(removeBook(id))}>
            Remove
          </button>
          <div className="btnLine" />
          <Link to="book/edit" state={{ title, author }}>
            <button className="btn" type="button">
              Edit
            </button>
          </Link>
        </div>
      </div>

      <div className="bookCardMiddle">
        <i className="fas fa-circle-notch circle" />
        <div>
          <h4 className="percent">98%</h4>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="completeLine" />

      <div className="bookCardRight">
        <p className="chapter">
          current chapter
        </p>
        <p className="chapterNumber">
          chapter 17
        </p>
        <Link to="book/update">
          <button type="button" className="chapterButton">
            update progress
          </button>
        </Link>
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
