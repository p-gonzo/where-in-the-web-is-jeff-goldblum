import Redux from 'redux';

var currentArticle = (state = '', action) => {

  switch (action.type) {
  case 'CHANGE_ARTICLE':
    return action.article;
  default:
    return state;
  }
};

export default currentArticle;