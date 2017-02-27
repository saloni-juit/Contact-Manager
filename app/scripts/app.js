'use strict';

/**
 * @ngdoc overview
 * @name contactManagerApp
 * @description
 * # contactManagerApp
 *
 * Main module of the application.
 */
angular
  .module('contactManagerApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/edit/:editNo',{
        templateUrl:'views/editContact.html',
        controller:'EditCtrl',
        controllerAs:'edit'
      })
      .when('/new',{
        templateUrl:'views/editContact.html',
        controller:'newContactCtrl',
        controllerAs:'newContact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
