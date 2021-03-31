import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return state.filter((book) => book !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
