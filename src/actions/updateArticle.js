import queryWikipedia from '../lib/wikipediaFetch';
import changeArticle from '../actions/currentArticle';
import changeArticleList from '../actions/articleList';


var handleArticleChange = (query) => {
  return function thunk (dispatch) {
    var pageLinks = [];

    var addContinuedLinksRecursively = function (data, continueParams) {
      
      queryWikipedia(query, continueParams).then((data) => {    
        
        var pageKey = Object.keys(data.query.pages)[0];
        var continuedLinks = data.query.pages[pageKey].links;
        pageLinks = pageLinks.concat(continuedLinks.map ((item) => item.title));
        
        if (data.continue) {
          addContinuedLinksRecursively(query, data.continue.plcontinue);
        } else {
          dispatchData();
        }
      });
    };

    function dispatchData() {
      dispatch(changeArticleList(pageLinks));
      dispatch(changeArticle(query));
    }
    addContinuedLinksRecursively(query);
  };
};

export default handleArticleChange;