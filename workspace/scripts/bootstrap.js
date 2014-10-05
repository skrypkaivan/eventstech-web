define(function(require) {
    'use strict';

    //require('angularCookie');
    //require('angularCookies');
    //require('angularAnimate');
    //require('angularMessages');
    require('angularSanitize');
    require('angularResource');
    require('uiBootstrap');
    require('uiRouter');
    //require('toaster');

    var angular = require('angular');
    var dependencies = [
        // Modules
        //require('modules/common/main'),
        require('modules/page/main'),
        require('modules/widgets/main'),
        require('modules/events/main'),

        // Screens
        require('screens/index/main'),
        require('screens/event-detail/main'),

        /* development */
        //require('modules/dev-tools/main'),
        //require('screens/testrest/main'),
        require('mocks/mocks')
        /* end:development */
    ].map(function(dep) {
        return dep.name;
    });

    var app = angular.module('eventsTech', dependencies);

    //app.constant(require('modules/config/appConstantValidation'));
    //app.constant(require('modules/config/appConstantRoles'));
    //app.constant(require('modules/config/appConstantDelays'));
    //app.constant(require('modules/config/appConstantStyles'));
    app.constant(require('modules/config/appConstantGlobals'));

    app.config(require('modules/config/appConfig'));
    //app.run(require('modules/config/appNavigationConfig'));

    angular.element(document).ready(function() {
        angular.element(document.body).removeClass('g-preloader');
        angular.bootstrap(document, [
            //'ngCookies',
            //'ipCookie',
            //'ngAnimate',
            //'ngMessages',
            'ngResource',
            'ngSanitize',
            'ui.bootstrap',
            'ui.router',
            //'toaster',
            'eventsTech'
        ]);
    });

    console.info('DEBUG. Application loaded in: ', (new Date()) - debugAppStartTime, 'ms');
});