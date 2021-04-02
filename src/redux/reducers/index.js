import { combineReducers } from 'redux';
import booksReducer from './books';
// import filterReducer from './filter';

const rootReducer = combineReducers({ books: booksReducer });

export default rootReducer;
