'use strict';

angular.module('itytApp').directive('similarSpeakers', ['Speakers', function (Speakers) {
  return {
    templateUrl: 'views/similarSpeakersWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Speakers.getSimilar().then(function(data) {
        $scope.speakers = data.speakers;
      });
    }
  };
}]);
