/**
 * Created by romo on 6/3/14.
 */
define(function (require) {
    'use strict';

    var angular = require('angular');
    var module = angular.module('indexScreen', []);

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
                    data: {
                        access: '$$GUEST_ACCESS'
                    },
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
                .state('client.index', {
                    url: '/',
                    template: require('text!./templates/indexContent.html')
                });
        }
    ]);

    return module;
});
