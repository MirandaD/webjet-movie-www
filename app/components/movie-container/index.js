
'use strict';
angular.module('myApp.movie-container', [])
.directive('movieContainer', ['$uibModal', '$http', function($uibModal, $http) {
  const movieContainerLink = (scope, element, attrs) => {
    scope.viewMovieDetail = (movieObj) => {
      $http.post('https://webjet-movie-api.herokuapp.com/movie', movieObj)
        .then((movieDetail) => {
          scope.movieDetail = movieDetail.data
          console.log(scope)
          $uibModal.open({
            templateUrl: '/components/movie-detail-modal/index.html',
            size: 'lg',
            animation: false,
            backdrop: false,
            resolve: {
              movieDetail: function () { return scope.movieDetail }
            },
            controller: 'movieDetailModalContorller'
          })
        })
    }
  }
  return {
    restrict: 'AEC',
    templateUrl: '/components/movie-container/index.html',
    scope: {
      movie: '=?'
    },
    link: movieContainerLink
  }
}])
