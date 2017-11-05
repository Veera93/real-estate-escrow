/*
  directives/content/headers/image.js
  Description: Contains directive full-screen image header with title/subtitle
*/
(function() {
  var app = angular.module('otb')
  app.directive('contentHeaderImage', [function() {
    return {
      template: "<div class='content-header-image center-content' ng-style=\"{'background':'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url({{image}})'}\"><h1 class='md-display-2'>{{title}}</h1><h3 class='md-headline' flex-gt-sm='50'>{{subtitle}}</h3><span ng-transclude></span></div>",
      scope: {
        title: '@',
        subtitle: '@',
        image: '@'
      },
      transclude: true
    }
  }])
})();
