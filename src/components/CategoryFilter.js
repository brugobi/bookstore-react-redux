import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const filterByCat = (e) => {
    const cat = e.target.value;
    if (cat !== 'All') {
      handleFilter(cat);
    }
  };

  return (
    <div>
      Filter:
      <select name="filter" id="filter" onChange={filterByCat}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
