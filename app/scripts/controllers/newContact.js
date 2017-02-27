'use strict';

/**
 * @ngdoc function
 * @name contactManagerApp.controller:newContactCtrl
 * @description
 * # newContactCtrl
 * Controller of the contactManagerApp
 */
angular.module('contactManagerApp')
    .controller('newContactCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
        //add  a new contact
        $scope.state = 'Create';
        $scope.contact = {};

        $scope.editSubmit = function() {
            $rootScope.contacts.push($scope.contact);
            $location.path('/');
        };

    }]);
