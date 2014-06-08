'use strict';

angular.module('itytApp').directive('eventSpeakers', ['Speakers', function (Speakers) {
  return {
    templateUrl: 'views/eventSpeakersWidget.html',
    replace: 'true',
    restrict: 'E'
  };
}]);

