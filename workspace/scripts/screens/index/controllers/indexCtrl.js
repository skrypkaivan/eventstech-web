define(function () {
    'use strict';

    return {
        'indexCtrl': ['$scope', 'pageService', 'CONST', 'eventsList', function ($scope, pageService, CONST, eventsList) {
            var title = [CONST.SITE_NAME, CONST.SITE_TITLE];
            pageService.setTitle(title.join(' - '));
            $scope.eventsList = eventsList;
        }]
    };
});