'use strict';

angular.module('itytApp').directive('popularSpeakers', ['Speakers', function (Speakers) {
  return {
    templateUrl: 'views/speakersWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Speakers.getPopular().then(function(data) {
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
