'use strict';

angular.module('itytApp').controller('EventDetailCtrl', ['$scope', 'Page', 'Constants', 'data', function ($scope, Page, Constants, data) {
  //ToDO: make propper errors handling
  var title = [Constants.meta.SITE_NAME, data.event ? data.event.name : 'Ошибка'];
  Page.setTitle(title.join(' - '));
  $scope.event = data.event;

}]);
