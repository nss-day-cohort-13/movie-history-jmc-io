'use strict';

app.controller("movieDoing", function($scope, $http, omdbFactory, FB_URL) {

  // as of now, this does nothing and needs to be moved to the firebase factory file once created
  $http
	.get(FB_URL)
    .then((response) => {
      $scope.movies = response.data;
      console.log("Movies!", $scope.movies);
    })


  $scope.searchInput = ""; // empty string to hold the value from users search
  $scope.movieArr = []; // empty array to hold data

  // This function, takes the users input and passes it to the searchMovie function in factories.js
  // which then the input becomes searchTerm. Then the data grabbed from that search is put in the empty array movieArr.
  $scope.omdbSearch = () => {
    omdbFactory.searchMovie($scope.searchInput)
      .then(data => $scope.movieArr = data);
  }

  // This function takes the imdbID and passes it into the factories.js getMovieInfo function argument.
  $scope.getInfo = (imdbID) => { // arg is a key (imdbID) on the api object sent back and looped over by searching a movie
    omdbFactory.getMovieInfo(imdbID)
      .then(data => $scope.selectedMovie = data);
  }

})
