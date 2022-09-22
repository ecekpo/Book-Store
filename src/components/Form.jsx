import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addedbooks } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const bookAdded = (e) => {
    e.preventDefault();
    const book = {
      id: uuid(),
      title,
      author,
      category,
    };
    if (title.length && author.length) {
      dispatch(addedbooks(book));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const bookTitleNew = (e) => {
    setTitle(e.target.value);
  };
  const bookAuthorNew = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <ul>
      <div className="book-form-container">
        <div className="addNew-book">
          <h2>ADD NEW BOOK</h2>
          <form className="book_form" onSubmit={bookAdded}>
            <input
              name="title"
              type="text"
              placeholder="Book title"
              value={title}
              onChange={bookTitleNew}
              required
            />
            <input
              name="author"
              type="text"
              placeholder="Category"
              value={author}
              onChange={bookAuthorNew}
              required
            />

            <div className="Option">
              <select
                required
                className="Choose_Opt"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {category.map((category) => (
                  <option value={category} key={category} className="option">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="addNewBook">ADD BOOK</button>
          </form>
          <div />
        </div>
      </div>
    </ul>
  );
};
export default Form;
