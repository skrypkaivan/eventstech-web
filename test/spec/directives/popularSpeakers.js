'use strict';

describe('Directive: popularSpeakers', function () {

  // load the directive's module
  beforeEach(module('itytApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<popular-speakers></popular-speakers>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the popularSpeakers directive');
  }));
});
