'use strict';

angular.module('itytApp').directive('similarEvents', ['Events', function (Events) {
  return {
    templateUrl: 'views/eventsWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Events.getSimilar().then(function(data) {
        //ToDo: handle errors
        $scope.events = data;
      });
    },
    link: function(scope, element) {
      scope.title = 'Похожие события';
      element.find('table').addClass('similar_events');
    }
  };
}]);
