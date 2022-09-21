import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_NEW_BOOK = 'bookstore/books/ADD_NEW_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOK';

const BookArr = [];
export const addedbooks = createAsyncThunk(
  ADD_NEW_BOOK,
  async (item) => {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lJao5He3QugK5nNbGykj/books', {
      item_id: item.id,
      title: item.title,
      author: item.author,
      category: item.category,
    });
    return {
      book: [
        item.id,
        [{
          author: item.author,
          title: item.title,
          category: item.category,
        }],
      ],
    };
  },
);
export const booksDeletedFromApi = createAsyncThunk(DELETE_BOOK, async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BZgwqZ2DNziuT17roN8k/books/${id}`);
  return { id };
});

// Reducer

const bookReducer = (state = BookArr, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload.books;
    case `${ADD_NEW_BOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${DELETE_BOOK}/fulfilled`:
      return state.filter((item) => item[0] !== action.payload.id);
    default:
      return state;
  }
};

// API Books Fetch

export const fetchBooksFromApi = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const { data } = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BZgwqZ2DNziuT17roN8k/books');
    return { books: Object.entries(data) };
  },
);

export default bookReducer;
