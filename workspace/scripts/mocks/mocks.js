/**
 * Created by romo on 5/12/14.
 */
define(function(require) {
    'use strict';

    require('angularMocks');

    var angular = require('angular'),
        _ = require('lodash');

    var mocks = {
        //events: ['/api/event', require('./../mocks/events.mock')]
    };

    return angular.module('e2e-mocks', ['ngMockE2E'])
        .run(['$httpBackend',
            function($httpBackend) {

                /**
                 * Enable all following APIs to run application in "Safe-Mode"
                 */
                //mock('events', 'GET', 200);
                /**
                 * END: Safe Mode
                 */


                /**
                 * Mock helper (wrapper)
                 * When used, request with specified mockName, method and statusCode is intercepted and
                 * fulfilled with mocked data and status code.
                 * @param mockName {String} Mock name, usually placed after "/api/..."
                 * @param method {String} Method name, e.g. POST, GET, ...
                 * @param statusCode {Number|String} HTTP 1.1 compliant status code (1xx - 5xx)
                 */
                function mock(mockName, method, statusCode) {
                    method = method.toUpperCase();

                    try {
                        var urlPattern = mocks[mockName][0],
                            urlPatternRegexp = new RegExp('^' + urlPattern.replace(/:\w+/g, '([^\\/]+)') + '$'),
                            urlKeys = _.invoke(urlPattern.match(/:\w+/g), String.prototype.replace, ':', '');

                        $httpBackend.when(method, urlPatternRegexp).respond(function(method, url, data) {
                            var urlValues = url.match(urlPatternRegexp).splice(1),
                                urlData = _.zipObject(urlKeys, urlValues),
                                responseEndpoint = mocks[mockName][1][method][statusCode],
                                response = (typeof responseEndpoint !== 'function') ? responseEndpoint : responseEndpoint(urlData);

                            console.info('Mock used: ', method, url, statusCode);
                            return [statusCode, response];
                        });
                        console.info('MOCKED:', '[' + urlPattern + ']', method, statusCode);
                    } catch (e) {
                        console.warn('WARNING. Failed to mock: ', mockName, method, statusCode);
                    }
                }

                // Pass through (Pass to server) other requests
                ['POST', 'GET', 'PUT', 'DELETE'].forEach(function(method) {
                    $httpBackend.when(method, /^.*$/).passThrough();
                });

            }
        ]);

});