/* global app:true */
/* exported app */
'use strict';

var app = angular
    .module('snpApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ])
    .constant('FIREBASE_URL', 'https://kohala.firebaseio.com/')
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/snippets.html',
            controller: 'SnippetsCtrl'
          })
        .when('/snippets/:snippetId', {
            templateUrl: 'views/snippet-view.html',
            controller: 'SnippetViewCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'SnippetViewCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
