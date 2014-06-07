'use strict';

angular.module('itytApp').directive('tabsBar', function () {
    return {
      template: '<ul><li></li></ul>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tabsBar directive');
      }
    };
  });
