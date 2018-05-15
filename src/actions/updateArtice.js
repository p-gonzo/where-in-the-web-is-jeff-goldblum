import queryWikipedia from '../lib/wikipediaFetch';
import changeArticle from '../actions/currentArticle';
import changeArticleList from '../actions/articleList';


var handleArticleChange = (query) => {

  //TODO: Learn what this code is doing
  return function thunk (dispatch) {
    queryWikipedia(query).then(((data) => {
      console.log(data)
      var newPage = data.query.normalized[0].to;
      var pageKey = Object.keys(data.query.pages)[0];
      var newLinks = data.query.pages[pageKey].links;
      console.log(newPage);
      console.log(newLinks);
      //dispatch(changeArticleList(articles));
      //dispatch(changeVideo(article));
    })); 
  };
};

export default handleArticleChange;