angular.module('myApp.movie-detail-modal', [])
.component('movieDetailModal', {
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    templateUrl: '/components/movie-detail-modal/index.html'
  }
)