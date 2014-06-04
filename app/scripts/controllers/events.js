'use strict';

angular.module('itytApp').controller('EventsCtrl', ['$scope', 'Page', 'Constants', 'data', function ($scope, Page, Constants, data) {

  var title = [Constants.meta.SITE_NAME, data.events ? 'События' : 'Ошибка'];
  Page.setTitle(title.join(' - '));
  $scope.events = data.events || [];

}]);
