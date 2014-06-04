'use strict';

angular.module('itytApp').controller('SpeakerDetailCtrl', ['$scope', 'Page', 'Constants', 'data', function ($scope, Page, Constants, data) {

  var title = [Constants.meta.SITE_NAME, data.speaker ? data.speaker.name : 'Ошибка'];
  Page.setTitle(title.join(' - '));
  $scope.speaker = data.speaker;

}]);
