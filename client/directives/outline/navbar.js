/*
  directives/outline/navbar.js
  Description: Contains directive for site header
*/
(function() {
  var app = angular.module('otb')
  app.directive('navBar', [function() {
    return {
      template: "<md-toolbar class='site-header' layout='row'>\
                    <div class='md-toolbar-tools' flex-gt-md='70' flex-offset-gt-md='15'>\
                      <a href='#'><strong>OnTheBlock</strong></a>\
                      <span flex></span>\
                      <md-button href='#about' class='md-button-custom md-primary-inverse' hide-xs> About </md-button>\
                      <md-button href='#/#listings' class='md-button-custom md-primary'> Find Homes </md-button>\
                    </div>\
                  </md-toolbar>"
    }
  }])
})();
