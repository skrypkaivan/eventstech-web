'use strict';

angular.module('itytApp').factory("Event", ["$resource", function($resource) {
    return $resource("api/event/:slug", {} , {
        getByCategory: {method:"GET", isArray:true, url: "api/event/tag/:tagId"},
        getPopular: {method:"GET", isArray:true, url:"api/event/popular"},
        getSimilar: {method: "GET", isArray:true, url:"api/event/:slug/similar"}
    });
}]);
