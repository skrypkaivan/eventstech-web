'use strict';

angular.module('itytApp').controller('EventDetailCtrl', ['$scope', 'Page', 'Constants', 'data', 'speakers',"similar", function ($scope, Page, Constants, data, speakers, similar) {

  /*
   * TODO:
   * 1. Make a proper errors handling
   * 2. Remove events injection - should be in main data at once
   */
  var title = [Constants.meta.SITE_NAME, data && !data.error && data.name || 'Ошибка'];

  Page.setTitle(title.join(' - '));
  $scope.event = data;
  $scope.similarEvents = similar;

  $scope.isSimilarVisible = function() {
    return $scope.similarEvents.length > 0;
  };

}]);
