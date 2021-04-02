import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER: return {
      books: [
        ...state.books.filter((book) => book.category === action.payload),
      ],
    };
      // return state.books.filter((book) => );
    default:
      return state;
  }
};

export default filterReducer;
