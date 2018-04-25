import { getMovies } from "./services/getMovies";

export const storeObject = {
	state: {
		movies: null,
		movieSearch: "",
		moviesFound: 0
	},
	getters: {
		getMovieSearchValue: state => state.movieSearch,
		getMoviesAmount: state => state.moviesFound
	},
	mutations: {
		changeMoviesArray(state, searchArray) {
			state.movies = searchArray
		},
		changeMoviesSearchValue(state, searchValue) {
			state.movieSearch = searchValue
		},
		changeMoviesAmount(state, amount) {
			state.moviesFound = amount
		}
	},
	actions: {
		GET_MOVIES_ARRAY: ({commit, state}) => {

			const SEARCH_STRING = state.movieSearch;

			getMovies(SEARCH_STRING).then(
				result => {
					commit('changeMoviesArray', result.Search);
					commit('changeMoviesAmount', result.totalResults)
				},
				error => {
					console.error("error: ", error);
					commit('changeMoviesArray', error)
				}
			);

		}
	}
};
