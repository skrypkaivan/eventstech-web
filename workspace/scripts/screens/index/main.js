define(function (require) {
    'use strict';

    var angular = require('angular');
    var module = angular.module('indexScreen', []);

    module.controller(require('./controllers/indexCtrl'));

    /**
     * Base layout configuration
     * Index page for different roles;
     *
     */
    module.config(['$stateProvider',
        function ($stateProvider) {

            $stateProvider
                .state('client', {
                    abstract: true,
                    views: {
                        '': {
                            template: require('text!./templates/indexMain.html')
                        },
                        'header': {
                            template: require('text!./templates/indexHeader.html')
                        },
                        'footer': {
                            template: require('text!./templates/indexFooter.html')
                        }
                    }
                })
                .state('client.events', {
                    url: '/',
                    views: {
                        'content@client': {
                            template: require('text!./templates/indexContent.html'),
                            controller: 'indexCtrl'
                        }
                    },
                    resolve: {
                        eventsList: ['$q', 'eventsService', function($q, eventsService) {
                            var deferred = $q.defer();
                            eventsService.query({}, function(response) {
                                deferred.resolve(response);
                            });
                            return deferred.promise;
                        }]
                    }
                });
        }
    ]);

    return module;
});
