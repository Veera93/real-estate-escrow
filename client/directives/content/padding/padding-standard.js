/*
  directives/content/padding/padding-standard.js
  Description: Contains directive for standard content padding
*/
(function() {
  var app = angular.module('otb')
  app.directive('contentPaddingStandard', [function() {
    return {
      template: "<div class='content-padding-standard' layout='column' layout-gt-sm='row' flex='90' flex-offset='5' flex-gt-sm='70' flex-offset-gt-sm='15' ng-transclude></div>",
      transclude: true
    }
  }])
})();
