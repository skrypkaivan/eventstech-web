'use strict';

angular.module('itytApp').directive('similarSpeakers', ['Speakers', function (Speakers) {
  return {
    templateUrl: 'views/speakersWidget.html',
    replace: 'true',
    restrict: 'E',
    scope: {},
    controller: function($scope){
      Speakers.getSimilar().then(function(data) {
        //ToDo: handle errors
        $scope.speakers = data;
      });
    },
    link: function(scope, element) {
      scope.title = 'Похожие докладчики';
      element.find('table').addClass('similar_speakers');
    }
  };
}]);
