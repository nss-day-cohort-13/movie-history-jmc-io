'use strict';

app.controller("movieDoing", ($scope, $http, omdbFactory, FB_URL) => {
	 $http
	 .get(FB_URL)
    .then((response) => {
      $scope.movies = response.data;
      console.log("Movies!", $scope.movies);
    })




  omdbFactory.searchMovie("movie").then;

})
