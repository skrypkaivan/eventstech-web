'use strict';

angular.module('itytApp').directive('similarEvents', [function () {
  return {
    templateUrl: 'views/eventsWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {
        events:"="
    },
    link: function(scope, element) {
      scope.title = 'Похожие события';
      element.find('table').addClass('similar_events');
    }
  };
}]);
