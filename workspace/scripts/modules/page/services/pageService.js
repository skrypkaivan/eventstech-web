define(function () {
    'use strict';

    return {
        'pageService': ['CONST', function (CONST) {
            var title = '', keywords = '', description = '',
                image = 'images/logo.jpg', siteUrl = CONST.SITE_URL;

            return {
                getTitle: function() { return title; },
                setTitle: function(newTitle) { title = newTitle; },
                getKeywords: function() { return keywords; },
                setKeywords: function(newKeywords) { keywords = newKeywords; },
                getDescription: function() { return description; },
                setDescription: function(newDescription) { description = newDescription; },
                getImage: function() { return image; },
                getSiteUrl: function() { return siteUrl; }
            };
        }]
    };
});