/*
  directives/outline/body.js
  Description: Contains directive for site body
*/
(function() {
  var app = angular.module('otb')
  app.directive('siteBody', [function() {
    return {
      template: "<div ng-transclude></div>",
      transclude: true
    }
  }])
})();
