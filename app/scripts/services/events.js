'use strict';

angular.module('itytApp').service('Events', ['$http', function Events($http) {

  var dataEventsUrl = 'mock_data/dataEvents.json',
      dataEventsPopularUrl = 'mock_data/dataEventsPopular.json',
      dataEventsSimilarUrl = 'mock_data/dataEventsSimilar.json',
      eventsFactory = {};

  eventsFactory.getAll = function() {
    var response = {};
    return $http.get(dataEventsUrl)
      .success(function(data) {
        response = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  eventsFactory.getEvent = function(slug) {
    var response = {};
    return $http.get(dataEventsUrl)
      .success(function(data) {
        response = data.find(function(elem) {
          return elem['slug'] === slug;
        });
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  }

  eventsFactory.getPopular = function() {
    var response = {};
    return $http.get(dataEventsPopularUrl)
      .success(function(data) {
        response = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  eventsFactory.getByTag = function(name) {
    var response = {};
    return $http.get(dataEventsUrl)
      .success(function(data) {
        response = data.filter(function(elem) {
          return elem.tags.find(function(tag) {
            return tag.slug === name;
          });
        });
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  eventsFactory.getSimilar = function() {
    var response = {};
    return $http.get(dataEventsSimilarUrl)
      .success(function(data) {
        response = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };
  return eventsFactory;
}]).factory("Event", ["$resource", function($resource) {
    return $resource("api/event/:slug", {} , {
        getByCategory: {method:"GET", isArray:true, url: "api/event/tag/:tagId"},
        getPopular: {method:"GET", isArray:true, url:"api/event/popular"}
    });
}]);
