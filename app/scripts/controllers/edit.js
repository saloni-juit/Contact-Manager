'use strict';

/**
 * @ngdoc function
 * @name contactManagerApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the contactManagerAppApp
 */
angular.module('contactManagerApp')
    .controller('EditCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
        //edit a contact
        $scope.state = 'Edit';
        var editParam = $location.path().split('/')[2];
        $scope.contact = $rootScope.contacts[editParam]; 

        $scope.editSubmit = function() {      
                $rootScope.contacts[editParam] = $scope.contact;
                $location.path('/');
        };

    }]);
