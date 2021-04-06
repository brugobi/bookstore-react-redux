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
        <div className="field is-grouped columns">
          <div className="control column is-7">
            <input className="input" type="text" name="title" id="title" placeholder="Book Title" value={title} onChange={handleChange} />
          </div>
          <div className="column is-flex is-justify-content-space-around">
            <div className="control">
              <span className="select">
                <select name="category" id="category" onChange={handleChange}>
                  <option value="none btnCategory"> Category </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </span>
            </div>
            <div className="control">
              <button className="button is-info btnSubmit" type="submit" name="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
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
