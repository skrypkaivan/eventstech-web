'use strict';

angular.module('itytApp').directive('eventsListComponent', function () {
  return {
    templateUrl: 'views/eventsListComponent.html',
    replace: 'true',
    restrict: 'E',
    scope: {
      data: '='
    },
    link: function($scope, element, attrs) {
      element.removeAttr('data');
    }
  };
});
