'use strict';

angular.module('itytApp').directive('similarSpeakers', [function () {
  return {
    templateUrl: 'views/speakersWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {
        speakers: "="
    },
    link: function(scope, element) {
      scope.title = 'Похожие докладчики';
      element.find('table').addClass('similar_speakers');
    }
  };
}]);
