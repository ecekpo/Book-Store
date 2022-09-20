// DEFINE ACTIONS BOOK ADD AND BOOK REMOVE
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// DEFINE ACTION TYPE FOR CREATORS
export const addBook = (book) => ({
  type: ADD_BOOK,
  data: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  data: id,
});

// DEFINING BOOK REDUCER
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data];
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.data);
    default:
      return state;
  }
};

export default bookReducer;
