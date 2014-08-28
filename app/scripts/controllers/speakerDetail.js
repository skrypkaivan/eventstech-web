'use strict';

angular.module('itytApp').controller('SpeakerDetailCtrl', ['$scope', 'Page', 'Constants', 'data', "similar", function ($scope, Page, Constants, data, similar) {

  /*
    * TODO:
    * 1. Make a proper errors handling
    * 2. Remove events injection - should be in main data at once
   */
  var title = [Constants.meta.SITE_NAME, data && !data.error && data.name || 'Ошибка'];

  Page.setTitle(title.join(' - '));
  $scope.speaker = data;
  $scope.similarSpeakers = similar;

  $scope.isSimilarVisible = function() {
    return $scope.similarSpeakers.length > 0;
  };
}]);
