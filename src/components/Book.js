import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => (
  <>
    <div className="column is-9">
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
      <span>
        <button className="button is-danger" type="button" onClick={() => clickHandler(book)}>Remove Book</button>
      </span>
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
