'use strict';

angular.module('itytApp').directive('activeNavigationClass', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var clazz = attrs.activeNavigationClass,
          link = element.find('a'),
          span = element.find('span'),
          icon = span.attr('icon'),
          path = link.attr('ng-href') || link.attr('href');

      //path = path.substring(1); //hack because path does not return including hashbang
      scope.location = $location;
      scope.$watch('location.path()', function(newPath) {
        if (path === newPath) {
          element.addClass(clazz);
          span && icon && span.removeClass(icon).addClass(icon + '-selected');
        } else {
          element.removeClass(clazz);
          span && icon && span.removeClass(icon + '-selected').addClass(icon);
        }
      });
    }
  };
}]);
