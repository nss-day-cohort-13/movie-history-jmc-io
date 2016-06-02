angular.module('app')
	.factory('todoFactory', ($http, API_URL) => {
		// cached todo
		let searchedMovies = null;
		let chosenMovie = null;

		return {
			searchMovie (searchTerm) {
				return $http
					.get(`${API_URL}s=${searchTerm}`)
					.then(res => res.data)
					.then(t => searchedMovies = t)
			},

			getMovieInfo (id) {
				return $http
					.get(`${API_URL}/i=${id}`)
					.then(res => res.data)
					.then(t => chosenMovie = t)
			},

			getChosenMovie () {
				return chosenMovie;
			}
		}
	})
