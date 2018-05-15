var queryWikipedia = function(query) {
  return fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&titles=${query}&prop=links&pllimit=max`)
    .then(data => data.json())
    .catch(err => console.log(err));
};

export default queryWikipedia;