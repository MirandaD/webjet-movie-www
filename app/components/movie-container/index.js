
'use strict';
angular.module('myApp.movie-container', [])
.directive('movieContainer', ['$uibModal', function($uibModal) {
  console.log('hi')
  const movieContainerLink = (scope, element, attrs) => {
    console.log('worked')
    const modalController = ()=>{
      console.log('him')
    }
    scope.viewMovieDetail=(movieObj)=>{
      
      $uibModal.open({
        templateUrl: '/components/movie-detail-modal/index.html',
        size: 'lg',
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        animation: false,
        backdrop: false,
        controller: modalController
      })
    }
  }
  return {
    restrict: 'AEC',
    templateUrl: '/components/movie-container/index.html',
    scope: {
      movie: '=?'
    },
    link:movieContainerLink
  }
}])
