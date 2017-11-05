/*
  directives/outline/loading.js
  Description: Contains directive for translucent loading overlay
*/
(function() {
  var app = angular.module('otb')
  app.directive('siteLoading', [function() {
    return {
      template: "<div class='site-loading center-content'><md-progress-circular md-mode='indeterminate'></md-progress-circular><br><span ng-transclude></span></div>",
      transclude: true
    }
  }])
})();
