'use strict';

angular.module('itytApp').directive('similarEvents', ['Events', function (Events) {
  return {
    templateUrl: 'views/similarEventsWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Events.getSimilar().then(function(data) {
        $scope.events = data.events;
      });
    }
  };
}]);
