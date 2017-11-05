/*
  util/rootscope-config.js
  Description: Contains factory that sets rootscope values
*/
(function() {
  var app = angular.module('otb')
  app.run(['$rootScope', 'NavigationFactory',
  function($rootScope, NavigationFactory) {
    $rootScope.navigation = {
      scrollTo: NavigationFactory.scrollTo,
      goLanding: NavigationFactory.goLanding,
      goSell: NavigationFactory.goSell
    }
    return {}
  }])
})();
