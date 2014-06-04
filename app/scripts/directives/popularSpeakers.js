'use strict';

angular.module('itytApp').directive('popularSpeakers', ['Speakers', function (Speakers) {
  return {
    templateUrl: 'views/popularSpeakersWidget.html',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Speakers.getPopular().then(function(data) {
        $scope.speakers = data.speakers;
      });
    }
  };
}]);
