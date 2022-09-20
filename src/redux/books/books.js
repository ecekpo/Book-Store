const ADD_NEW_BOOK = 'bookstore/books/ADD_NEW_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const BookArr = [
  {
    id: 1,
    title: 'The Tempest',
    author: 'William Shakespear',
    chapter: 4,
    genre: 'Adventure Fiction',
  },
  {
    id: 2,
    title: 'The Gods Are Not To Blame',
    author: 'Ola Rotimi',
    chapter: 7,
    genre: 'novel',
  },
  {
    id: 3,
    title: 'Even One Child',
    author: 'Moses Akpanbio',
    chaper: 5,
    genre: 'novel',
  },
  {
    id: 4,
    title: 'A Tale of Thoughts',
    author: 'Uchecukwu Onwu',
    chapter: 10,
    genre: 'poetry',
  },
  {
    id: 5,
    title: 'Dawn of a New Day',
    author: 'Benedicta Naomi Mbanuzue',
    chapter: 8,
    genre: 'poetry',
  },
];
const bookReducer = (state = BookArr, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [
        ...state, action.book,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);

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


export const addedbooks = (book) => ({

  type: ADD_NEW_BOOK,
  book,
});

export const booksDeleted = (id) => ({
  type: DELETE_BOOK,
  id,
});


export default bookReducer;
