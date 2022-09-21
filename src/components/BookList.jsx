import { useDispatch } from 'react-redux';
import { booksDeletedFromApi } from '../redux/books/books';

/* eslint-disable react/prop-types */
function BookList({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const chapter = Math.floor(Math.random() * 11);
  const handleDelete = () => {
    dispatch(booksDeletedFromApi(id));
  };

  return (
    <ul>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{category}</p>
      <p>
        Chapter:
        {chapter}
      </p>
      <button type="button" onClick={handleDelete}>Remove books</button>
    </ul>
  );
}

export default BookList;
