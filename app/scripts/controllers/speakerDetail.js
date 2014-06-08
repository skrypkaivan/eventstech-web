'use strict';

angular.module('itytApp').controller('SpeakerDetailCtrl', ['$scope', 'Page', 'Constants', 'data', 'events', function ($scope, Page, Constants, data, events) {

  /*
    * TODO:
    * 1. Make a proper errors handling
    * 2. Remove events injection - should be in main data at once
   */
  var title = [Constants.meta.SITE_NAME, data.speaker ? data.speaker.name : 'Ошибка'],
      //To be removed:
      newEventsData = events.events.filter(function(elem) {
        return data.speaker.events.indexOf(elem._id) != -1;
      });

  Page.setTitle(title.join(' - '));
  data.speaker.events = newEventsData;
  $scope.speaker = data.speaker;

}]);
