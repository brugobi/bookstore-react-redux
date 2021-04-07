import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav className="navbar navbar-custom box" role="navigation" aria-label="main navigation">

    <div className="navbar-brand">
      <div className="navbar-item">
        <div className="brand Bookstore-CMS">Bookstore CMS</div>
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-item BOOKS">BOOKS</div>
      <div className="navbar-item CATEGORIES">CATEGORIES</div>
    </div>

    <div className="navbar-end">
      <FaUserCircle />
    </div>
  </nav>
);

export default NavBar;
