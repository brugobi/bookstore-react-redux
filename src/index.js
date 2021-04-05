import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './redux/reducers/books';
import 'bulma/css/bulma.min.css';

// const id = Math.floor(Math.random() * 1000);

const initialstate = {
  books: [
    {
      id: Math.floor(Math.random() * 50),
      title: 'Batman: The Dark Knight',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 50),
      title: `Hidden Figures - The American Dream and the Untold Story of the Black 
            Women Mathematicians Who Helped Win the Space Race`,
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 500),
      title: 'The Diary of a Young Girl',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 500),
      title: 'The Shining',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 500),
      title: 'The Little Prince',
      category: 'Kids',
    },
    {
      id: Math.floor(Math.random() * 500),
      title: 'City of Stars: A New Yorkers Guide to the Cosmos',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 500),
      title: 'Avatar',
      category: 'Sci-Fi',
    },
  ],
};

const store = createStore(booksReducer, initialstate);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
