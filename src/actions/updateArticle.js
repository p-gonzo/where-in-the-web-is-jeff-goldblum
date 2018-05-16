import queryWikipedia from '../lib/wikipediaFetch';
import changeArticle from '../actions/currentArticle';
import changeArticleList from '../actions/articleList';


var handleArticleChange = (query) => {
  //TODO: Learn what this code is doing
  return function thunk (dispatch) {
    queryWikipedia(query).then((data) => {
      // var newPage = data.query.normalized[0].to;

      var pageKey = Object.keys(data.query.pages)[0];
      var newLinks = data.query.pages[pageKey].links;
      newLinks = newLinks.map ((item) => item.title);

      var addContinuedLinksRecursively = function (data, continueParams) {
        queryWikipedia(query, continueParams).then((data) => {    
          var continuedPageKey = Object.keys(data.query.pages)[0];
          var continuedNewLinks = data.query.pages[continuedPageKey].links;
          newLinks = newLinks.concat(continuedNewLinks.map ((item) => item.title));
          if (data.continue) {
            addContinuedLinksRecursively(query, data.continue.plcontinue)
          } else {
            dispatchData();
          }
        })
      };

      if (data.continue) {
        addContinuedLinksRecursively(query, data.continue.plcontinue)
      } else {
        dispatchData();
      }

      function dispatchData() {
        dispatch(changeArticleList(newLinks));
        dispatch(changeArticle(query));
      }
    }); 
  };
};

export default handleArticleChange;