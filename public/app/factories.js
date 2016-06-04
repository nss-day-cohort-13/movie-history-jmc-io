app.factory('omdbFactory', ($http, API_URL) => {

		// EVERYTHING in this factory called 'omdbFactory' holds all the below. Once it is injected into
		// other controllers  etc, it can use whatever it has (via the functions/variables/etc) elsewhere


		// These two variables used in the two api fuctions below
		let searchedMovies = null;
		let chosenMovie = null;

		// This return object has a lot of stuff in it but all just gets returned to 'omdbFactory'
		return {

			// This function, 'searchMovie' is used to grab the data from the api by injecting a variable
			// that we will make up here called (searchTerm), searchTerm is then put in line 18 and that is what searches the api
			searchMovie (searchTerm) { console.log("search", searchTerm);
				return $http
					.get(`${API_URL}s=${searchTerm}`)
					.then(result => result.data.Search) // Search is the key of the object returned from the API
					// .then(function(result){console.log(result.data)})
					.then(t => searchedMovies = t) // 't' is whatever is returned from the previous .then
			},

			// This function, 'id' is what was passed in via mainControl.js getInfo function argument.
			getMovieInfo (id) {
				return $http
					.get(`${API_URL}i=${id}`)
					.then(result => result.data)
					.then(t => chosenMovie = t) // 't' is whatever is returned from the previous .then
			},

			// a getter for returning the variables
			getSearchedMovies () {
				return searchedMovies;
			},

			// a getter for returning the variables
			getChosenMovie () {
				return chosenMovie;
			}
		}
	})



	// Everything here down needs to be eventually moved to another file
	// Also, i dont think any of this works just yet
	app.factory('firebaseFactory', ($http, FB_URL)=> {

		// Firebase variables
		let addedMovies = null;
		let gotMovies = null;
		let deletedMovies = null;

		// Firebase 'get', 'post', and 'delete'
		return {

			getUserInfo (userID) {
				let userInfo = null;
			}

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

		  },
		  getAddedMovies () {
		  	return addedMovies;
		  },
		  getGotMovies () {
		  	return gotMovies;
		  },
		  getDeletedMovies () {
		  	return deleteMovies;
		  }
		}

	})



	.factory('firebaseFactory', ($http, firebase_URL) => {
	  return {
	    getUserInfo(userID) {
	      let userInfo = null;

	      return $http
	        .get(`${firebase_URL}/${userID}.json`)
	        .then(response => userInfo = response.data)
	    },
	    addMovie(userID, movieData) {
	      return $http
	        .post(`${firebase_URL}/${userID}.json`, movieData)
	    },
	    updateWatched(userID, movieID, watchedValue) {
	      return $http
	        .patch(`${firebase_URL}/${userID}/${movieID}/watched.json`, watchedValue)
	    },
	    deleteMovie(userID, movieID) {
	      return $http
	      	.delete(`${firebase_URL}/${userID}/${movieID}.json`)
	    }
	  }
		})