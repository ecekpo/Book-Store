import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { booksDeletedFromApi } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/index.css';

/* eslint-disable react/prop-types */
function BookList({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const chapter = Math.floor(Math.random() * 11);
  const percentage = 66;
  const handleDelete = () => {
    dispatch(booksDeletedFromApi(id));
  };

  return (
    <ul className="bookScreen_container">
      <div className="bookScreen">
        <div className="col1">
          <div className="col1-row1">
            <p className="category">{category}</p>
            <h3 className="title">{title}</h3>
            <p className="author">{author}</p>
          </div>
          <div className="col1-row2">
            <span>Comments</span>
            <div className="span-bookScreen" />
            <div>
              <button type="button" onClick={handleDelete} className="book-remove-btn">
                Remove
              </button>
            </div>
            <div className="span-bookScreen" />
            <div>Edit</div>
          </div>
        </div>
        <div className="percentage">
          <CircularProgressbar
            className="circularprogressbar"
            value={percentage}
            text={`${percentage}%`}
          />
          <div className="percentage2">
            <p>{`${percentage}%`}</p>
            Completed
          </div>
        </div>
        <span className="book-chapter" />
        <div className="book_chapter">
          <h3>CURRENT CHAPTER</h3>
          <span>
            Chapter
            {chapter}
          </span>
          <button type="button" className="percentage-progress-btn">Update Percentage Progress</button>
        </div>
      </div>
    </ul>
  );
}

export default BookList;
