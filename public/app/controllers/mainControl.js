'use strict';

app.controller("movieDoing", ($scope, $http, todoFactory) => {
	 $http.get('https://movie-history-e5c21.firebaseio.com/.json')
    .then((response) => {
      $scope.movies = response.data.movies;
    })




  todoFactory.searchMovie("movie").then;


})
