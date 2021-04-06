import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions/index';

const BooksForm = ({ createBook }) => {
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
  };

  return (
    <div>
      <form>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" name="title" id="title" placeholder="Book Title" value={title} onChange={handleChange} />
          </p>

          <p className="control">
            <span className="select is-expanded">
              <select name="category" id="category" onChange={handleChange}>
                <option value="none"> Category </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </span>
          </p>
          <p className="control">
            <button className="button" type="submit" name="submit" onClick={handleSubmit}>Submit</button>
          </p>
        </div>
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
