const CHECK_STATUS = 'booklist/categories/CHECK_STATUS';
const categories = 'Under Construction';

export const bookStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return categories;
    default:
      return state;
  }
};

export default categoriesReducer;
