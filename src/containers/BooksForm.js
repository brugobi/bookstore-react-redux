/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions/index';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
        </label>
        <input type="text" name="title" id="title" onChange={handleChange} />
        <label>
          Choose a category:
          <select name="category" id="category" onChange={handleChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: () => { dispatch(createBook); },
});

export default connect(mapDispatchToProps)(BooksForm);
