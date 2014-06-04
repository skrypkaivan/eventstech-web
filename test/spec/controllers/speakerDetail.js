'use strict';

describe('Controller: SpeakerdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('itytApp'));

  var SpeakerdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeakerdetailCtrl = $controller('SpeakerdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
