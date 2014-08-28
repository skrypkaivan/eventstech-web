'use strict';

angular.module('itytApp', ['ngRoute', 'ngResource', 'pasvaz.bindonce']).config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/events.html',
      controller: 'EventsCtrl',
      resolve: {
        data: function($q, Event) {
          var deferred = $q.defer();
          Event.query({}, function(response) {
              deferred.resolve(response);
          });
          return deferred.promise;
        }
      }
    })
    .when('/events/:slug', {
      templateUrl: 'views/eventDetail.html',
      controller: 'EventDetailCtrl',
      resolve: {
        data: function($q, $route, Event) {
          var deferred = $q.defer();
          Event.get({slug:$route.current.params.slug}, function(response) {
              deferred.resolve(response);
          });
          return deferred.promise;
        },
        //Important: temporary mock -  for prod should be made with all events data in the main data at once
        speakers: function() {
          return [];
        },
        similar: function(Event, $q, $route) {
            var deferred = $q.defer();
            Event.getSimilar({slug:$route.current.params.slug}, function(response) {
               deferred.resolve(response);
            });
            return deferred.promise;
        }
      }
    })
    .when('/events/tags/:name', {
      templateUrl: 'views/events.html',
      controller: 'EventsCtrl',
      resolve: {
        data: function($q, $route, Event) {
          var deferred = $q.defer();
          Event.getByCategory({tagId:$route.current.params.name}, function(response) {
              deferred.resolve(response);
          });
          return deferred.promise;
        }
      }
    })
    .when('/speakers', {
      templateUrl: 'views/speakers.html',
      controller: 'SpeakersCtrl',
      resolve: {
        data: function($q, Speaker) {
          var deferred = $q.defer();
          Speaker.query({}, function(response) {
             deferred.resolve(response);
          });
          return deferred.promise;
        }
      }
    })
    .when('/speakers/:name', {
      templateUrl: 'views/speakerDetail.html',
      controller: 'SpeakerDetailCtrl',
      resolve: {
        data: function($q, $route, Speaker) {
          var deferred = $q.defer();
          Speaker.get({slug: $route.current.params.name}, function(response) {
              deferred.resolve(response);
          });
          return deferred.promise;
        },
        similar: function($q, $route, Speaker) {
            var deferred = $q.defer();
            Speaker.getSimilar({slug:$route.current.params.name}, function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
      }
    })
    .when('/speakers/tags/:name', {
      templateUrl: 'views/speakers.html',
      controller: 'SpeakersCtrl',
      resolve: {
        data: function($q, $route, Speaker) {
          var deferred = $q.defer();
          Speaker.getByCategory({tagId: $route.current.params.name}, function(response) {
              deferred.resolve(response);
          });
          return deferred.promise;
        }
      }
    })
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'SigninCtrl'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true).hashPrefix('!');

});
