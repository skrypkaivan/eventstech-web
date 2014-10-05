/**
 * A general component for displaying events list (f.e. search results)
 * Usage <events-list-component events-list='...'></events-list-component>
 */
define(function () {
    'use strict';

    return {
        'eventsListComponent': [function () {
            return {
                templateUrl: 'scripts/modules/events/templates/eventsListComponent.html',
                replace: 'true',
                restrict: 'E',
                scope: {
                    eventsList: '='
                },
                link: function ($scope, $element) {
                    $element.removeAttr('events-list');
                }
            }
        }]
    };
});