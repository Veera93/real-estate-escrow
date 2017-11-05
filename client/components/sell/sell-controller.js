/*
  components/sell/sell-controller.js
  Description: Contains controller that is used to for sellers to put houses on the market
*/
(function() {
  var app = angular.module('otb')
  app.controller('SellController', ['$scope', 'HelperFactory', 'ValidationFactory',
  function($scope, HelperFactory, ValidationFactory) {
    $scope.sellData = { // Data submitted to BlockChain and API
      id: parseInt(HelperFactory.currentUnixTime()),
      fullName: "",
      emailAddress: "",
      address: "",
      price: "",
      squareFeet: "",
      bedroomCount: "",
      imageUrl: ""
    }
    $scope.canSubmit = function() {
      if (!$scope.sellData.fullName || !ValidationFactory.isString($scope.sellData.fullName) || !ValidationFactory.checkStringLength($scope.sellData.fullName, 1, 25)) {
        return false
      } else if (!$scope.sellData.emailAddress || !ValidationFactory.isEmail($scope.sellData.emailAddress)) {
        return false
      } else if (!$scope.sellData.address || !ValidationFactory.isString($scope.sellData.address) || !ValidationFactory.checkStringLength($scope.sellData.address, 1, 75)) {
        return false
      } else if (!$scope.sellData.price || !ValidationFactory.isNumber($scope.sellData.price) || parseInt($scope.sellData.price < 1)) {
        return false
      } else if (!$scope.sellData.squareFeet || !ValidationFactory.isNumber($scope.sellData.squareFeet) || parseInt($scope.sellData.squareFeet < 1)) {
        return false
      } else if (!$scope.sellData.bedroomCount || !ValidationFactory.isNumber($scope.sellData.bedroomCount) || parseInt($scope.sellData.bedroomCount < 1)) {
        return false
      } else if (!$scope.sellData.imageUrl || !ValidationFactory.isString($scope.sellData.imageUrl)) {
        return false
      }
      return true
    }
  }])
})();
