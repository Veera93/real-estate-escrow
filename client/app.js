/*
  app.js
  Description: Instantiates the Angular application and handles routes
*/
(function() {
  var app = angular.module('otb', ['ngMaterial', 'ngRoute'])
  app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("")
    $routeProvider
      .when('/', {
        templateUrl: 'components/landing/landing-view.html',
        controller: 'LandingController'
      })
      .when('/about', {
        templateUrl: 'components/about/about-view.html'
      })
      .when('/purchase', {
        templateUrl: 'components/purchase/purchase-view.html',
        controller: 'PurchaseController'
      })
      .when('/sell', {
        templateUrl: 'components/sell/sell-view.html',
        controller: 'SellController'
      })
      .otherwise({
        redirectTo:'/'
      })
  }])
})();
