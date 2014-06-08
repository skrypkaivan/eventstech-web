'use strict';

angular.module('itytApp').controller('EventDetailCtrl', ['$scope', 'Page', 'Constants', 'data', 'speakers', function ($scope, Page, Constants, data, speakers) {

  /*
   * TODO:
   * 1. Make a proper errors handling
   * 2. Remove events injection - should be in main data at once
   */
  var title = [Constants.meta.SITE_NAME, data.event ? data.event.name : 'Ошибка'],
    //To be removed:
    newSpeakersData = speakers.speakers.filter(function(elem) {
      return data.event.speakers.indexOf(elem._id) != -1;
    });

  Page.setTitle(title.join(' - '));
  data.event.speakers = newSpeakersData;
  $scope.event = data.event;

}]);
