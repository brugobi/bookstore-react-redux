import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => (
  <>
    <div className="column is-6">
      <div className="School-of">{book.category}</div>
      <div className="title">{book.title}</div>
      <div>
        <span className="Comments">
          Comments |
        </span>
        <span className="Comments">
          | Edit
        </span>
      </div>
    </div>
    <div className="column is-3">
      here
    </div>
    <div className="column is-3">
      <p className="Current-Chapter">CURRENT CHAPTER</p>
      <p className="Current-Lesson">Chapter 17</p>
      <p>
        <button className="button is-info" type="button" onClick={() => clickHandler(book)}>Remove Book</button>
      </p>
    </div>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
