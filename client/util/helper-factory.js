/*
  util/helper-factory.js
  Description: Contains factory that contains general helper methods
*/
(function() {
  var app = angular.module('otb')
  app.factory('HelperFactory', [function() {
    var currentUnixTime = function() {
      return Math.floor(+new Date()/1000).toString()
    }
    return {
      currentUnixTime: currentUnixTime
    }
  }])
})();
