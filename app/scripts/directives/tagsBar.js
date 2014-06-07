'use strict';

angular.module('itytApp').directive('tagsBar', function () {
  return {
    templateUrl: 'views/tagsBar.html',
    replace: 'true',
    restrict: 'E',
    scope: {
      data: '=',
      entity: '@entity'
    },
    link: function($scope, element, attrs) {
      if (attrs.label == 'true') {
        element.prepend('Категории: ');
      }
      else {
        element.find('ul').css('margin', '0');
      }
      element.removeAttr('data').removeAttr('label').removeAttr('entity');
    }
  };
});
