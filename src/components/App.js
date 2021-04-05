import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <NavBar />
    <BooksForm />
    <BooksList />
  </div>
);

export default App;
