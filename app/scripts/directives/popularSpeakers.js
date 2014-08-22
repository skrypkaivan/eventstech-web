'use strict';

angular.module('itytApp').directive('popularSpeakers', ['Speaker', function (Speaker) {
  return {
    templateUrl: 'views/speakersWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Speaker.getPopular({}, function(data) {
        //ToDo: handle errors
        $scope.speakers = data;
      });
    },
    link: function(scope, element) {
      scope.title = 'Популярные докладчики';
      element.find('table').addClass('popular_speakers');
    }
  };
}]);
