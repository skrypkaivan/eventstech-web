'use strict';

angular.module('itytApp').controller('EventsCtrl', ['$scope', 'Page', 'Constants', 'data', function ($scope, Page, Constants, data) {
  //ToDO: make propper errors handling
  var title = [Constants.meta.SITE_NAME, data.error ? 'Ошибка' : 'События'];
  Page.setTitle(title.join(' - '));
  $scope.events = data || [];

}]);
