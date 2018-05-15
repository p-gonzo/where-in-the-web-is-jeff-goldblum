import Redux from 'redux';

var articleList = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_ARTICLE_LIST':
    return [...action.articles]; //create a new array with es6
  default:
    return state;
  }
};

export default articleList;