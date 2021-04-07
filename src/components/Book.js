import React from 'react';
import PropTypes from 'prop-types';
import { ImSpinner2 } from 'react-icons/im';

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
      <div className="columns">
        <div className="column">
          <ImSpinner2 />
        </div>
        <div className="column">
          <p className="Percent-Complete">64%</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
    </div>
    <div className="column is-3">
      <p className="Current-Chapter">CURRENT CHAPTER</p>
      <p className="Current-Lesson">Chapter 17</p>
      <p>
        <button className="button btnRemove is-info" type="button" onClick={() => clickHandler(book)}>Remove Book</button>
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
