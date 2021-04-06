import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="wrapper">
    <NavBar />
    <div className="container is-fluid">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
