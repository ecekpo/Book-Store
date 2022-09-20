import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import Form from './Form';
// import Header from './Header';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <header />
      <div>
        {books.map((book) => (
          <BookList
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            chapter={book.chapter}
            genre={book.genre}
          />
        ))}
        <Form />
      </div>
    </>
  );
};

export default DisplayBooks;
