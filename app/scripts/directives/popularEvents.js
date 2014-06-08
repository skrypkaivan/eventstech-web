'use strict';

angular.module('itytApp').directive('popularEvents', ['Events', function (Events) {
  return {
    templateUrl: 'views/eventsWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Events.getPopular().then(function(data) {
        $scope.events = data.events;
      });
    },
    link: function(scope, element) {
      scope.title = 'Популярные события';
      element.find('table').addClass('popular_events');
    }
  };
}]);
