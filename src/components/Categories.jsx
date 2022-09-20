import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { bookStatus } from '../redux/categories/categories.js';
import Header from './Header';

const Categories = () => {
  const bookCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div>
        <button type="submit" onClick={() => dispatch(bookStatus())}>Check Status</button>
        <div>{bookCategories}</div>
      </div>
    </>
  );
};

export default Categories;
