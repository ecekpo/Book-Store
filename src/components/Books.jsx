import React, { useState } from 'react';
import Header from './Header';
import BookList from './BookList';
import Form from './Form';

const Books = () => {
  const [books, setBooks] = useState([{ id: '1', title: 'Things Fall Apart', author: 'By Chinwe Achebe' }]);

  const addBooks = () => setBooks();

  return (
    <>
      <Header />
      <div>
        {books.map((books) => (
          <BookList
            key={books.id}
            title={books.title}
            author={books.author}
          />
        ))}
        <Form addBooks={addBooks} />
      </div>
    </>
  );
};

export default Books;
