
//TODO

//find out a way to use '&plcontinue=CONTINUE_PARAMS'
//to run embeded promise callbacks until no 'continue'
//property exists

var queryWikipedia = function(query, continueParams) {
  var queryString = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&titles=${query}&prop=links&pllimit=max` 
  if (continueParams) {
    queryString += `&plcontinue=${continueParams}`
  }
  return fetch(queryString)
    .then(data => {
      return data.json()
    })
    .catch(err => console.log(err));
};

export default queryWikipedia;