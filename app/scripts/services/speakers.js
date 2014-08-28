'use strict';

angular.module('itytApp').factory("Speaker", ["$resource", function($resource) {
    return $resource("api/speaker/:slug", {}, {
        getByCategory : {method: "GET", isArray: true, url: "api/speaker/tag/:tagId"},
        getPopular: {method: "GET", isArray: true, url: "api/speaker/popular"},
        getSimilar: {method: "GET", isArray:true, url:"api/speaker/:slug/similar"}
    });
}]);
