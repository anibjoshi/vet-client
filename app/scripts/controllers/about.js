'use strict';

/**
 * @ngdoc function
 * @name vetClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vetClientApp
 */
angular.module('vetClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
