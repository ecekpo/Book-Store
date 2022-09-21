import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addedbooks } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const bookAdded = (event) => {
    event.preventDefault();
    const book = {
      id: uuid(),
      title,
      author,
      category: `${['Thriller', 'Fiction', 'Comedy'][Math.floor(Math.random() * ['Thriller', 'Fiction', 'Comedy'].length)]}`,
    };
    if (title.length && author.length) {
      dispatch(addedbooks(book));
      setTitle('');
      setAuthor('');
    }
  };

  const newBookTitle = (e) => {
    setTitle(e.target.value);
  };
  const newBookAuthor = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div className="form-container">
      <div>
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={bookAdded}>
          <input
            name="title"
            type="text"
            placeholder="Book title"
            value={title}
            onChange={newBookTitle}
          />
          <input
            name="author"
            type="text"
            placeholder="Category"
            value={author}
            onChange={newBookAuthor}
          />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
