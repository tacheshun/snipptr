'use strict';

app.controller('SnippetsCtrl', function ($scope, $location, Snippet) {

    $scope.snippets = Snippet.all;
    $scope.snippet = {title: '', description: "", author: ""};

    $scope.submitSnippet = function () {
        Snippet.create($scope.snippet).then(function (ref) {
            $location.path('/snippets/' + ref.name());
        });
    };

    $scope.deleteSnippet = function (snippet) {
        Snippet.remove(snippet);
    };

});