import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './redux/reducers/books';

const id = Math.floor(Math.random() * 1000);

const feedUpBooks = [
  {
    id,
    title: 'Batman: The Dark Knight',
    category: 'Action',
  },
  {
    id,
    title: `Hidden Figures - The American Dream and the Untold Story of the Black 
            Women Mathematicians Who Helped Win the Space Race`,
    category: 'Biography',
  },
  {
    id,
    title: 'The Diary of a Young Girl',
    category: 'History',
  },
  {
    id,
    title: 'The Shining',
    category: 'Horror',
  },
  {
    id,
    title: 'The Little Prince',
    category: 'Kids',
  },
  {
    id,
    title: 'City of Stars: A New Yorkers Guide to the Cosmos',
    category: 'Learning',
  },
  {
    id,
    title: 'Avatar',
    category: 'Sci-Fi',
  },
];

const store = createStore(booksReducer, [feedUpBooks]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
