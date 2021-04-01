import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, clickHandler }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const filterHandle = (e) => {
    if (e.target.id === 'All') {
      clickHandler(categories.filter((category) => category !== 'All'));
    } else {
      clickHandler(e.target.value);
    }
  };

  const filterValue = filter.length > 1 ? 'All' : filter[0];

  return (
    <div>
      Filter:
      <select name="filter" id="filter" value={filterValue} onChange={filterHandle}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryFilter;
