import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { booksDeleted } from '../redux/books/books';

const BookList = ({
  id, title, author, chapter, genre,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(booksDeleted(Number(id)));
  };

  return (
    <ul>
      <h2>
        Title:
        {title}
      </h2>
      <p>
        Author:
        {author}
      </p>
      <p>
        Chapter:
        {chapter}
      </p>
      <p>
        Genre:
        {genre}
      </p>
      <button type="button" id={id} onClick={(e) => { handleDelete(e.target.id); }}>Remove books</button>
    </ul>
  );
};

BookList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default BookList;
