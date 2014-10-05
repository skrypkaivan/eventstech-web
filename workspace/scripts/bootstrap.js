define(function(require) {
    'use strict';

    //require('angularCookie');
    //require('angularCookies');
    //require('angularAnimate');
    //require('angularMessages');
    require('uiBootstrap');
    require('uiRouter');
    //require('toaster');

    var angular = require('angular');
    var dependencies = [
        // Modules
        //require('modules/common/main'),

        // Screens
        require('screens/index/main')

        /* development */
        //require('modules/dev-tools/main'),
        //require('screens/testrest/main'),
        //require('mocks/mocks')
        /* end:development */
    ].map(function(dep) {
            return dep.name;
        });

    var app = angular.module('app', dependencies);

    //app.constant(require('modules/config/appConstantValidation'));
    //app.constant(require('modules/config/appConstantRoles'));
    //app.constant(require('modules/config/appConstantDelays'));
    //app.constant(require('modules/config/appConstantStyles'));

    app.config(require('modules/config/appConfig'));
    //app.run(require('modules/config/appNavigationConfig'));

    angular.element(document).ready(function() {
        angular.element(document.body).removeClass('g-preloader');
        angular.bootstrap(document, [
            //'ngCookies',
            //'ipCookie',
            //'ngAnimate',
            //'ngMessages',
            'ui.bootstrap',
            'ui.router',
            //'restangular',
            //'toaster',
            'app'
        ]);
    });

    console.info('DEBUG. Application loaded in: ', (new Date()) - debugAppStartTime, 'ms');
});