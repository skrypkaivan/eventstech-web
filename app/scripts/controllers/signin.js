'use strict';

angular.module('itytApp').controller('SigninCtrl', ['$scope', 'Page', 'Constants', function ($scope, Page, Constants) {
  var title = [Constants.meta.SITE_NAME, 'Вход'];
  Page.setTitle(title.join(' - '));
}]);
