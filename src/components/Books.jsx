import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import BookList from './BookList';
import Form from './Form';
import { fetchBooksFromApi } from '../redux/books/books';
import Header from './Header';

function DisplayBooks() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromApi());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div>
        {books.map((book) => (
          <BookList
            key={book[0]}
            id={book[0]}
            title={book[1][0].title}
            author={book[1][0].author}
            chapter={book[1][0].category}
          />
        ))}
        <Form />
      </div>
    </>
  );
}

export default DisplayBooks;
