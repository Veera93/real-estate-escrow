/*
  directives/outline/navbar.js
  Description: Contains directive for site outline. Contains header, body, footer.
*/
(function() {
  var app = angular.module('otb')
  app.directive('siteOutline', [function() {
    return {
      template: "<div><nav-bar></nav-bar><site-body><span ng-transclude></span></site-body><footer></footer></div>",
      transclude: true
    }
  }])
})();
