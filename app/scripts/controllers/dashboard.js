'use strict';

/**
 * @ngdoc function
 * @name vetClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vetClientApp
 */
angular.module('vetClientApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
