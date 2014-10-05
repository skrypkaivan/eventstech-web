require.config({
    baseUrl: '/scripts',
    paths: {
        // core libraries
        'lodash': '../bower_components/lodash/dist/lodash',
        'es5shim': '../bower_components/es5-shim/es5-shim',
        'es6shim': '../bower_components/es6-shim/es6-shim',
        'text': '../bower_components/requirejs-text/text',
        'json3': '../bower_components/json3/lib/json3',

        // angular modules
        'angular': '../bower_components/angular/angular',
        'angularMocks': '../bower_components/angular-mocks/angular-mocks',
        'angularCookies': '../bower_components/angular-cookies/angular-cookies',
        'angularMessages': '../bower_components/angular-messages/angular-messages',
        'angularAnimate': '../bower_components/angular-animate/angular-animate',
        'angularSanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angularResource': '../bower_components/angular-resource/angular-resource',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
        'uiBootstrap': '../bower_components/angular-bootstrap/ui-bootstrap'
        //'toaster': '../bower_components/angularjs-toaster/toaster',
        // angular stylize
        //'uiSelect2': '../bower_components/ui-select2/select2',
        //'uiUtils': '../bower_components/ui-utils/ui-utils'
    },
    /* Define all modules with dependencies */
    /* Define all non AMD components */
    shim: {
        angular: {exports: 'angular'},
        angularMocks: ['angular'],
        angularCookies: ['angular'],
        angularMessages: ['angular'],
        angularAnimate: ['angular'],
        angularSanitize: ['angular'],
        uiRouter: ['angular'],
        uiBootstrap: ['angular'],
        //uiSelect2: ['angular'],
        //uiUtils: ['angular'],
        //angularCookie: ['angular'],
        //toaster: ['angular'],

        // Application core dependencies, libraries
        bootstrap: [
            'angular',
            'es5shim',
            'es6shim',
            'json3',
            'lodash'
        ]
    },
    deps: ['bootstrap']
});
