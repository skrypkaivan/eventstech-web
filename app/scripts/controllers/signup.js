'use strict';

angular.module('itytApp').controller('SignupCtrl', ['$scope', 'Page', 'Constants', function ($scope, Page, Constants) {
  var title = [Constants.meta.SITE_NAME, 'Регистрация'];
  Page.setTitle(title.join(' - '));
}]);