/*
  components/purchase/purchase-controller.js
  Description: Contains controller for submitting a home purchase offer
*/
(function() {
  var app = angular.module('otb')
  app.controller('PurchaseController', ['$scope', '$location', 'HelperFactory', 'NavigationFactory', 'ValidationFactory',
  function($scope, $location, HelperFactory, NavigationFactory, ValidationFactory) {
    $scope.stateData = {
      loading: false,
      submitted: false,
      homeId: $location.search().id,
      house: ['Rychard Hunt']
    }
    $scope.buyData = {
      fullName: "Charlie",
      emailAddress: "test@test.com",
      offer: 0
    }
    $scope.canSubmit = function() {
      if (!$scope.buyData.fullName || !ValidationFactory.isString($scope.buyData.fullName) || !ValidationFactory.checkStringLength($scope.buyData.fullName, 1, 25)) {
        return false
      } else if (!$scope.buyData.emailAddress || !ValidationFactory.isEmail($scope.buyData.emailAddress)) {
        return false
      } else if (!$scope.buyData.offer || !ValidationFactory.isNumber($scope.buyData.offer) || parseInt($scope.buyData.offer < 1)) {
        return false
      }
      return true
    }
    $scope.submit = function() {
      $scope.stateData.loading = true
      addProposal($scope.stateData.homeId, $scope.buyData.fullName, $scope.buyData.offer, 5)
      $scope.stateData.loading = false
      $scope.stateData.submitted = true
    }
    $scope.init = function() {
      if (!$scope.stateData.homeId) {
        return NavigationFactory.goLanding()
      }
      $scope.stateData.house = getHouseDetails($scope.stateData.homeId)
    }
    $scope.init()
  }])
})();
