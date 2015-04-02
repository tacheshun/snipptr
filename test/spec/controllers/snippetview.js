'use strict';

describe('Controller: SnippetviewCtrl', function () {

  // load the controller's module
  beforeEach(module('snpApp'));

  var SnippetviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      SnippetviewCtrl = $controller('SnippetviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
