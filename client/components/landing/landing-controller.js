/*
  components/landing/landing-controller.js
  Description: Contains controller for the landing page. (Retrieves listings)
*/
(function() {
  var app = angular.module('otb')
  app.controller('LandingController', ['$scope', 'HelperFactory', 'ValidationFactory',
  function($scope, HelperFactory, ValidationFactory) {
    $scope.stateData = {
      loading: false,
      houseId: localStorage.getItem('houseId'),
      house: false
    }
    $scope.init = function() {
      var houseId = $scope.stateData.houseId
      if (houseId) {
        $scope.stateData.house = getHouseDetails(houseId)
      }
    }
    $scope.init()
  }])
})();
