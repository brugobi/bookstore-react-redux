/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../redux/actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <div>
      <CategoryFilter filter={filter} clickHandler={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>category</th>
            <th>Remove Books</th>
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
  filter: state.filter,
});

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatch = {
  removeBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
