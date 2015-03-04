'use strict';

/**
 * @ngdoc overview
 * @name vetClientApp
 * @description
 * # vetClientApp
 *
 * Main module of the application.
 */
angular
  .module('vetClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/authentication/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
