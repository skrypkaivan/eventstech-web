define(function (require) {
    'use strict';

    var angular = require('angular');
    var module = angular.module('widgets', []);

    module.directive(require('./directives/tagsBar'));

    return module;
});