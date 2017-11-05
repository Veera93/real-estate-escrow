/*
  util/navigation-factory.js
  Description: Contains factory that contains methods for navigation
*/
(function() {
  var app = angular.module('otb')
  app.factory('NavigationFactory', ['$anchorScroll', '$location', function($anchorScroll, $location) {
    var goLanding = function() {
      return $location.path('/')
    }
    var goSell = function() {
      return $location.path('sell')
    }
    var scrollTo = function(anchor) {
      var id = $location.hash()
      $location.hash(anchor)
      $anchorScroll()
      $location.hash(id)
    }
    return {
      goLanding: goLanding,
      goSell: goSell,
      scrollTo: scrollTo
    }
  }])
})();
