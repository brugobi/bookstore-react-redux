import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  reminders: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case REMOVE_BOOK:
      return {
        reminders: [
          ...state.reminders.filter((book) => book !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default booksReducer;
