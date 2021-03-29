import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const {
    id,
    title,
    category,
  } = book;

  return (
    <div>
      <table>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{category}</td>
        </tr>
      </table>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
