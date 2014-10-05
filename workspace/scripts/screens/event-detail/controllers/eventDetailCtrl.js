define(function () {
    'use strict';

    return {
        'eventDetailCtrl': ['$scope', 'pageService', 'CONST', 'event', function ($scope, pageService, CONST, event) {
            var title = [CONST.SITE_NAME, event.name];
            pageService.setTitle(title.join(' - '));
            $scope.event = event;
        }]
    };
});