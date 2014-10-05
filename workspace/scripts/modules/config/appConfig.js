/**
 * Created by romo on 18-Jun-14.
 */
define(function() {
    'use strict';

    return ['$urlRouterProvider', '$locationProvider',
        function($urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/');

            /* Removing #hashbang from URLs; Enabling History API manipulation */
            /* Note: server should rewrite URL to /index.html for all non-API, non-static-file routes */
            $locationProvider.html5Mode(true);

        }
    ];
});