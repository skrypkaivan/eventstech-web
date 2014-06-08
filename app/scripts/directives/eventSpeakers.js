'use strict';

angular.module('itytApp').directive('eventSpeakers', [function () {
  return {
    templateUrl: 'views/speakersWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {
      data: '='
    },
    controller: function($scope){
      $scope.title = 'Докладчики мероприятия';
      $scope.speakers = $scope.data;
    },
    link: function(scope, element) {
      element.find('table').addClass('popular_speakers');
    }
  };
}]);

