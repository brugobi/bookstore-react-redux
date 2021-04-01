import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        books: [
          ...state.books.filter((book) => book !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default booksReducer;
