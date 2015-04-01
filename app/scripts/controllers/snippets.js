'use strict';

app.controller('SnippetsCtrl', function ($scope, Snippet) {

    $scope.snippets = Snippet.all;

    $scope.snippet = {title: '', description: "", author: "", url: ""};

    $scope.submitSnippet = function () {
        Snippet.create($scope.snippet).then(function () {
            $scope.snippet = {title: '', description: "", author: "", url: ""};
        });
    };

    $scope.deletePost = function (snippet) {
        Snippet.delete(snippet);
    };

});