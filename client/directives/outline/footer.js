/*
  directives/outline/footer.js
  Description: Contains directive for site footer
*/
(function() {
  var app = angular.module('otb')
  app.directive('footer', [function() {
    return {
      template: "<div class='site-footer' layout='column'>\
                  <div layout-gt-xs='row' layout='column'>\
                    <div class='site-footer-column' layout='column' flex='50' flex-gt-sm='20' flex-offset-gt-sm='10'>\
                      <span>\
                        OnTheBlock\
                      </span>\
                      <span>\
                        <a ng-click=''>About</a>\
                      </span>\
                      <span>\
                        <a ng-click='navigation.goLanding()'>Buy Homes</a>\
                      </span>\
                      <span>\
                        <a ng-click='navigation.goSell()'>Sell Homes</a>\
                      </span>\
                    </div>\
                    <div class='site-footer-column' layout='column' flex='50' flex-gt-sm='20'>\
                      <span>\
                        LEGAL\
                      </span>\
                      <span>\
                        <a ng-click=''>Terms and Conditions</a>\
                      </span>\
                    </div>\
                    <div class='site-footer-column' layout='column' flex='50' flex-gt-sm='20'>\
                      <span>\
                        CONTACT\
                      </span>\
                      <span>\
                        charlie@charliecampanella.com\
                      </span>\
                    </div>\
                  </div>\
                  <div class='site-footer-copyright'>\
                    &copy 2017 Charlie Campanella. All Rights Reserved\
                  </div>\
                <div>"
    }
  }])
})();
