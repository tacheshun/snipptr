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
    .constant('FIREBASE_URL', 'https://kohala.firebaseIO.com/')
    .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/add-snippet.html',
            controller: 'SnippetsCtrl'
          })
          .otherwise({
            redirectTo: '/'
        });
    });
