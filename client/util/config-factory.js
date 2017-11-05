/*
  util/config-factory.js
  Description: Contains factory that contains a configuration object
*/
(function() {
  var app = angular.module('otb')
  app.factory('ConfigFactory', [function() {
    return {
      appName: "OnTheBlock"
    }
  }])
})();
