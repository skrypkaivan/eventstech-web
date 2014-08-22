'use strict';

angular.module('itytApp').service('Speakers', ['$http', function Events($http) {
  var dataSpeakersUrl = 'mock_data/dataSpeakers.json',
      dataSpeakersPopularUrl = 'mock_data/dataSpeakersPopular.json',
      dataSpeakersSimilarUrl = 'mock_data/dataSpeakersSimilar.json',
      speakersFactory = {};

  speakersFactory.getAll = function() {
    var response = {};
    return $http.get(dataSpeakersUrl)
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

  speakersFactory.getSpeaker = function(name) {
    var response = {};
    return $http.get(dataSpeakersUrl)
      .success(function(data) {
        response = data.find(function(elem) {
          return elem['slug'] === name;
        });
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  speakersFactory.getByTag = function(name) {
    var response = {};
    return $http.get(dataSpeakersUrl)
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

  speakersFactory.getPopular = function() {
    var response = {};
    return $http.get(dataSpeakersPopularUrl)
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

  speakersFactory.getSimilar = function() {
    var response = {};
    return $http.get(dataSpeakersSimilarUrl)
      .success(function(data) {
        response = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  }

  return speakersFactory;

}]).factory("Speaker", ["$resource", function($resource) {
    return $resource("api/speaker/:slug", {}, {
        getByCategory : {method: "GET", isArray: true, url: "api/speaker/tag/:tagId"},
        getPopular: {method: "GET", isArray: true, url: "api/speaker/popular"}
    });
}]);
