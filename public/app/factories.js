app.factory('omdbFactory', ($http, API_URL) => {
		// cached todo
		let searchedMovies = null;
		let chosenMovie = null;

		return {
			searchMovie (searchTerm) { console.log("search", searchTerm);
				return $http
					.get(`${API_URL}s=${searchTerm}`)
					.then(function(result){console.log(result.data)})
					.then(t => searchedMovies = t)
			},

			getMovieInfo (id) {
				return $http
					.get(`${API_URL}i=${id}`)
					.then(result => result.data)
					.then(t => chosenMovie = t) // 't' is whatever is returned from the previous .then\
			},

			getSearchedMovies () {
				return searchedMovies;
			},

			getChosenMovie () {
				return chosenMovie;
			}
		}
	})

	.factory('firebaseFactory', ($http, FB_URL)=> {

		// Firebase variables
		let addedMovies = null;
		let gotMovies = null; // ????
		let deletedMovies = null; // ?????

		// Firebase 'get', 'post', and 'delete'
		return {
		  addMovie (movieObj) {
		    return $http
		      .post(`${FB_URL}.json`, movieObj)
		  },
		  getMovies () {
		    return $http
		      .get(`${FB_URL}.json`)
		      .then(result => result.data)
		      .then(t => gotMovies = t)
		  },
		  deleteMovies (id) {
		  	return $http
		  		.delete(`${FB_URL}/${id}.json`)

		  }
		}

	})