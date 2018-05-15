import queryWikipedia from '../lib/wikipediaFetch';
import changeArticle from '../actions/currentArticle';
import changeArticleList from '../actions/articleList';


var handleArticleChange = (query) => {

  //TODO: Learn what this code is doing
  return function thunk (dispatch) {
    searchYouTube((query) => {
      //define links list
        //.then ???
      var articles = asdfads;
      var article = query;
      dispatch(changeArticleList(articles));
      dispatch(changeVideo(article));
    });
  };
};

export default handleArticleChange;