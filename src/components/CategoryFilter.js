import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const filterByCat = (e) => {
    const cat = e.target.value;
    handleFilter(cat);
  };

  return (
    <div className="field has-addons">
      <div className="control">
        <div className="button">Filter :</div>
      </div>
      <p className="control is-expanded">
        <span className="select is-fullwidth">
          <select name="filter" id="filter" onChange={filterByCat}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </span>
      </p>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
