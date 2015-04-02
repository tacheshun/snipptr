'use strict';

describe('Controller: SnippetViewCtrl', function () {

  // load the controller's module
  beforeEach(module('snpApp'));

  var SnippetViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      SnippetViewCtrl = $controller('SnippetViewCtrl', {
      $scope: scope
    });
  }));

    it('default html should contain a link to Snippets page', inject(function ($compile) {
        scope.$digest();
        var href = document.getElementsByTagName("a")[0].getAttribute("href");
        expect(href).toBe('#/');
    }));
});
