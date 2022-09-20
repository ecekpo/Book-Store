// DEFINE ACTION FOR BOOKSTORE CHECK STATUS
const CHECK_STATUS = 'bookstore/catagories/CHECK_STATUS';

// DEFINE ACTION TYPE FOR CHECKING STATUS
const checkStatus = () => ({
  type: CHECK_STATUS,
});

// DEFINE REDUCER FOR CHECK STATUS
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default (checkStatus, categoryReducer);
