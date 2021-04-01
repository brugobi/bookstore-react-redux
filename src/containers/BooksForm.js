import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions/index';

const BooksForm = ({ createBook }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({ id: Math.floor(Math.random() * 500), title, category });
    setTitle('');
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" value={title} onChange={handleChange} />
        </label>

        <label htmlFor="category">
          Choose a category:
          <select name="category" id="category" onChange={handleChange}>
            <option value="none">--</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <button type="submit" name="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createBook,
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(BooksForm);
