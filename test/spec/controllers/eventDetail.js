'use strict';

describe('Controller: EventdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('itytApp'));

  var EventdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventdetailCtrl = $controller('EventdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
