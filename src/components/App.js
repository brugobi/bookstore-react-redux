import React from 'react';
import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="wrapper">
    <div className="container is-fluid">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
