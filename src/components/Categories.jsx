import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { bookStatus } from '../redux/categories/categories';
import Header from './Header';

const Categories = () => {
  const bookCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkCategoriesStatus = () => {
    dispatch(bookStatus());
  };

  return (
    <>
      <Header />
      <div>
        <button type="submit" onClick={checkCategoriesStatus}>Check Status</button>
        <div>{bookCategories}</div>
      </div>
    </>
  );
};

export default Categories;
