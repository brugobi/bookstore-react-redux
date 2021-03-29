/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
        </label>
        <input type="text" name="title" id="title" />
        <label>
          Choose a category:
          <select name="category" id="category">
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

export default BooksForm;
