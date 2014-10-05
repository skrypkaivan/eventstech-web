/**
 * A general purpose module for Event entity
 */

define(function (require) {
    'use strict';

    var angular = require('angular');
    var module = angular.module('events', []);

    module.service(require('./services/eventsService'));
    module.directive(require('./directives/eventsListComponent'));
    module.filter(require('./filters/eventDate'));

    return module;
});