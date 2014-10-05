define(function () {
    'use strict';

    return {
        'pageCtrl': ['$scope', 'pageService', function ($scope, pageService) {
            $scope.Page = pageService;
        }]
    };
});