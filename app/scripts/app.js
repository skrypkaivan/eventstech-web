'use strict';

angular.module('itytApp', ['ngResource', 'pasvaz.bindonce']).config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/events.html',
      controller: 'EventsCtrl',
      resolve: {
        data: function(Events) {
          return Events.getAll();
        }
      }
    })
    .when('/events/:id', {
      templateUrl: 'views/eventDetail.html',
      controller: 'EventDetailCtrl',
      resolve: {
        data: function($route, Events) {
          return Events.getEvent($route.current.params.id);
        }
      }
    })
    .when('/speakers', {
      templateUrl: 'views/speakers.html',
      controller: 'SpeakersCtrl',
      resolve: {
        data: function(Speakers) {
          return Speakers.getAll();
        }
      }
    })
    .when('/speakers/:name', {
      templateUrl: 'views/speakerDetail.html',
      controller: 'SpeakerDetailCtrl',
      resolve: {
        data: function($route, Speakers) {
          return Speakers.getSpeaker($route.current.params.name);
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
