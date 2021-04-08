import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { ImSpinner8 } from 'react-icons/im';

const Book = ({ book, clickHandler }) => (
  <>
    <div className="column is-6">
      <div className="School-of">{book.category}</div>
      <div className="title">
        {book.title}
      </div>

      <div>
        <span className="Comments">
          Comments |
        </span>
        <span className="Comments">
          <input className="remove-btn" type="submit" value="Remove Book" onClick={() => clickHandler(book)} />
        </span>
        <span className="Comments">
          | Edit
        </span>
      </div>
    </div>
    <div className="column is-3">
      <div className="columns">
        <div className="column is-flex">
          <div>
            <IconContext.Provider value={{ size: '70px', color: '#379cf6' }}>
              <ImSpinner8 />
            </IconContext.Provider>
          </div>
          <div>
            <p className="Percent-Complete">64%</p>
            <p className="Completed">Completed</p>
          </div>
        </div>

      </div>
    </div>
    <div className="column is-3">
      <p className="Current-Chapter">CURRENT CHAPTER</p>
      <p className="Current-Lesson">Chapter 17</p>
      <p>
        <button className="button btnProg is-info" type="button">UPDATE PROGRESS</button>
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
