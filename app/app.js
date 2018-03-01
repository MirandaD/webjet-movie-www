'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ui.bootstrap.tpls',
  'ngAnimate',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.movie-container',
  'myApp.movie-detail-modal'
]).
controller('movieListController', ['$scope', '$http','$uibModal', movieListController])

function movieListController($scope, $http, $uibModal){
  $scope.loadMovies = ()=>{
    $http.get('http://localhost:3001/movie-list')
    .then(resmovieList=>{
      $scope.movieList = resmovieList.data
    })
    .catch(err=>{
      console.log(err)
    })
  }
  $scope.loadMovies()
}
