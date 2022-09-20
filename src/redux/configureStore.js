import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cateReducer from './categories/categories.js';
import BookReducer from './books/books.js';

const rootReducer = combineReducers({
  books: BookReducer,
  categories: cateReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
