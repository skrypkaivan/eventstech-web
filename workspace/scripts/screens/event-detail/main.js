define(function (require) {
    'use strict';

    var angular = require('angular');
    var module = angular.module('eventDetailScreen', []);

    module.controller(require('./controllers/eventDetailCtrl'));


    module.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('client.eventDetail', {
                    url: '/events/:slug',
                    views: {
                        'content@client': {
                            template: require('text!./templates/eventDetail.html'),
                            controller: 'eventDetailCtrl'
                        }
                    },
                    resolve: {
                        event: ['$stateParams', 'eventsService', '$q',
                            function ($stateParams, eventsService, $q) {
                                var deferred = $q.defer();
                                eventsService.get({slug: $stateParams.slug}, function(response) {
                                    deferred.resolve(response);
                                });
                                return deferred.promise;
                            }
                        ]
                    }
                });
        }
    ]);

    return module;
});