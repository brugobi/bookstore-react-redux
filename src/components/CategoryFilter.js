import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const filterByCat = (e) => {
    const cat = e.target.value;
    handleFilter(cat);
  };

  return (

    <nav className="navbar navbar-custom box" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand Bookstore-CMS">Bookstore CMS</div>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-item BOOKS">BOOKS</div>
        <div className="navbar-item CATEGORIES">
          <div className="control">
            <div className="">Categories : </div>
          </div>
          <select name="filter" id="filter" onChange={filterByCat}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="navbar-end">
        <IconContext.Provider value={{ size: '30px', color: '#379cf6' }}>
          <FaUserCircle />
        </IconContext.Provider>
      </div>
    </nav>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
