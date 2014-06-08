'use strict';

angular.module('itytApp').directive('popularEvents', ['Events', function (Events) {
  return {
    templateUrl: 'views/popularEventsWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Events.getPopular().then(function(data) {
        $scope.events = data.events;
      });
    }
  };
}]);
