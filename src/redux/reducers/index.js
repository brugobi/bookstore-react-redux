import { combineReducers } from 'redux';
import booksReducer from './books';

const rootStore = combineReducers({
  books: booksReducer,
});

export default rootStore;
