/**
 * A general purpose module for setting page's title, description, keywords and other meta-data
 * Could be used probably further for localization maintaining as well
 */

define(function (require) {
    'use strict';

    var angular = require('angular');
    var module = angular.module('page', []);

    module.service(require('./services/pageService'));
    module.controller(require('./controllers/pageCtrl'));

    return module;
});