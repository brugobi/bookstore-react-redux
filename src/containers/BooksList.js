import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../redux/actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = (filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <div>
      <CategoryFilter handleFilter={handleFilterChange} />
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

export default BooksList;
