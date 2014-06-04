'use strict';

angular.module('itytApp').controller('EventDetailCtrl', ['$scope', 'Page', 'Constants', 'data', function ($scope, Page, Constants, data) {

  var title = [Constants.meta.SITE_NAME, data.event ? data.event.name : 'Ошибка'];
  Page.setTitle(title.join(' - '));
  $scope.event = data.event;

}]);
