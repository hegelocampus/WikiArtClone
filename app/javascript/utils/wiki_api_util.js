export const fetchWikiIntro = url => {
  const parsed = url.match(/\/wiki\/(.*)/)[1];
  return $.ajax({
    url: `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&exlimit=2&redirects=2&orgin=*&format=json&titles=${parsed}`,
    dataType: 'jsonp',
    headers: { 'Api-User-Agent': 'benellis8099@gmail.com' },
    data: {
      origin: '*'
    }
  });
};
