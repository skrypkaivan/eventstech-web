'use strict';

angular.module('itytApp').service('Events', ['$http', function Events($http) {

  var dataEventsUrl = 'mock_data/dataEvents.json',
      dataEventsPopularUrl = 'mock_data/dataEventsPopular.json',
      eventsFactory = {};

  eventsFactory.getAll = function() {
    var response = {};
    return $http.get(dataEventsUrl)
      .success(function(data) {
        response.events = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  eventsFactory.getEvent = function(id) {
    var response = {};
    return $http.get(dataEventsUrl)
      .success(function(data) {
        response.event = data.find(function(elem) {
          return +elem['_id'] === +id;
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
        response.events = data;
      })
      .error(function(message) {
        response.error = message;
      })
      .then(function() {
        return response;
      });
  };

  return eventsFactory;

}]);