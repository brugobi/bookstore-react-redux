import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

const feedUpBooks = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Batman: The Dark Knight',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Hidden Figures - The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race',
    category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'The Diary of a Young Girl',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'The Shining',
    category: 'Horror',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'The Little Prince',
    category: 'Kids',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'City of Stars: A New Yorkers Guide to the Cosmos',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Avatar',
    category: 'Sci-Fi',
  },
];

ReactDOM.render(
  <Provider store={feedUpBooks}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
