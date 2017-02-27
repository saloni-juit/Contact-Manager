'use strict';

/**
 * @ngdoc function
 * @name contactManagerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactManagerAppApp
 */
angular.module('contactManagerApp')
    .run(function($rootScope) {
          $rootScope.contacts =  [{
            id: 1,
            name: 'Terrence S. Hatfield',
            tel: 6516031723,
            email: 'TerrenceSHatfield@rhyta.com'
        }, {
            id: 2,
            name: 'Chris M. Manning',
            tel: 5133075859,
            email: 'ChrisMManning@dayrep.com'
        }, {
            id: 3,
            name: 'Ricky M. Digiacomo',
            tel: 9187740199,
            email: 'RickyMDigiacomo@teleworm.us'
        }, {
            id: 4,
            name: 'Michael K. Bayne',
            tel: 7029895145,
            email: 'MichaelKBayne@rhyta.com'
        }, {
            id: 5,
            name: 'John I. Wilson',
            tel: 3182926700,
            email: 'JohnIWilson@dayrep.com'
        }, {
            id: 6,
            name: 'Rodolfo P. Robinett',
            tel: 8035579815,
            email: 'RodolfoPRobinett@jourrapide.com'
        }];
    })
    .controller('MainCtrl', ['$scope','$location','$rootScope',function($scope,$location,$rootScope) {
    	//initial value of contacts
        $scope.contacts = $rootScope.contacts;

        $scope.editContact = function(index){
            $location.path('/edit/'+index);
        };

        $scope.deleteContact = function(index){
            $scope.contacts.splice(index,1);
        };

        $scope.addContact = function(){
            $location.path('/new/');
        };
    }]);
