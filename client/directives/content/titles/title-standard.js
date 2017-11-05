/*
  directives/content/titles/title-standard.js
  Description: Contains directive for content titles. Text on left, content on right. Scales for mobile.
*/
(function() {
  var app = angular.module('otb')
  app.directive('contentTitleStandard', [function() {
    return {
      template: "<div flex='100' layout='column' layout-gt-sm='row' layout-align='center center' layout-align-gt-sm='start center'>\
                  <div flex='100' flex-gt-sm='50'>\
                    <h1><i ng-if='icon' class='fa {{icon}}'></i> {{text}}</h1>\
                  </div>\
                  <div flex='100' flex-gt-sm='50' layout='row' layout-align='center center' layout-align-gt-sm='end center' ng-transclude>\
                  \
                  </div>\
                </div>",
      scope: {
        text: "@",
        icon: "@"
      },
      transclude: true
    }
  }])
})();
