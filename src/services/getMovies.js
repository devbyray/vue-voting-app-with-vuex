export const getMovies = function(searchMovieValue) {
    return fetch(`http://www.omdbapi.com/?s=${searchMovieValue}&apikey=9a019663&page=1&type=movie`).then(response => response.json());
}