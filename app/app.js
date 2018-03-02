'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ui.bootstrap.tpls',
  'ngAnimate',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.movie-container'
])
  .controller('movieListController', ['$scope', '$http', '$uibModal', movieListController])
  .controller('movieDetailModalContorller', ['$scope', '$http', '$uibModalInstance', 'movieDetail',
    function ($scope, $http, $uibModalInstance, movieDetail) {
      $scope.movieDetail = movieDetail
      $scope.close = () => {
        $uibModalInstance.close()
        console.log('hihihii')
      }
    }])

function movieListController($scope, $http, $uibModal){
  $scope.loadMovies = ()=>{
    $http.get('https://webjet-movie-api.herokuapp.com/movie-list')
    .then(resmovieList=>{
      $scope.movieList = resmovieList.data
    })
    .catch(err=>{
      console.log(err)
    })
  }
  $scope.loadMovies()
}
