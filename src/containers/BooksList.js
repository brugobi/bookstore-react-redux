/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../redux/actions/index';

const BooksList = ({
  books,
  removeBook,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} clickHandler={handleRemoveBook} />
          ))}
        </tbody>

      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapDispatch = {
  removeBook,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
