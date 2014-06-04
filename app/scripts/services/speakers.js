'use strict';

angular.module('itytApp').service('Speakers', ['$http', function Events($http) {
  var dataSpeakersUrl = 'mock_data/dataSpeakers.json',
      dataSpeakersPopularUrl = 'mock_data/dataSpeakersPopular.json',
      speakersFactory = {};

  speakersFactory.getAll = function() {
    var response = {};
    return $http.get(dataSpeakersUrl)
      .success(function(data) {
        response.speakers = data;
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
        response.speaker = data.find(function(elem) {
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

  speakersFactory.getPopular = function() {
    var response = {};
    return $http.get(dataSpeakersPopularUrl)
      .success(function(data) {
        response.speakers = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  return speakersFactory;

}]);
