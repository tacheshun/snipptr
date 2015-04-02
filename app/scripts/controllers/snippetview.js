'use strict';

app.controller('SnippetViewCtrl', function ($scope, $routeParams, Snippet) {
    $scope.snp = Snippet.get($routeParams.snippetId);
});
