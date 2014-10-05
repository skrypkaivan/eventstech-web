/**
 * A general component for displaying tags bar
 * Usage <tags-bar class="..." entity="events/users" label="true/false" tags="..."></tags-bar>
 */

define(function () {
    'use strict';

    return {
        'tagsBar': [function () {
            return {
                templateUrl: 'scripts/modules/widgets/templates/tagsBar.html',
                replace: 'true',
                restrict: 'E',
                scope: {
                    tags: '=',
                    entity: '@entity'
                },
                link: function($scope, $element, $attrs) {
                    if ($attrs.label === 'true') {
                        $element.prepend('Категории: ');
                    }
                    else {
                        $element.find('ul').css('margin', '0');
                    }
                    $element.removeAttr('tags').removeAttr('label').removeAttr('entity');
                }                
            }
        }]
    };
});