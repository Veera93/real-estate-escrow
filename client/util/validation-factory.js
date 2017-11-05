/*
  util/validation-factory.js
  Description: Factory that contains general validation methods
*/

(function() {
  var app = angular.module('otb')
  app.factory('ValidationFactory',[function() {
    /*
      checkStringLength()
      -Description: Determines whether or not a string is within a specified length
      -Parameters: [string, String, Required], [minimum, Number, Required], [maximum, Number, Required]
      -Return: Boolean
    */
    var checkStringLength = function(string, minimum, maximum) {
      var string = string.toString()
      if (string.length >= minimum && string.length <= maximum) {
        return true
      }
      return false
    }
    /*
      inArray()
      -Description: Determines whether or not an item is in an array
      -Parameters: [needle, Any Type], [haystack, Array]
      -Return: Boolean
    */
    var inArray = function(needle, haystack) {
      if (!needle) {
        return false
      } else if (!isArray(haystack)) {
        return false
      } else if (haystack.length < 1) {
        return false
      }
      if (haystack.indexOf(needle) !== -1) {
        return true
      } else {
        return false
      }
    }
    /*
      isArray()
      -Description: Determines whether or not an object is an array
      -Parameters: [array, Any Type]
      -Return: Boolean
    */
    var isArray = function(array) {
      return Array.isArray(array)
    }
    /*
      isBoolean()
      -Description: Determines whether or not an object is a boolean
      -Parameters: [boolean, Any Type]
      -Return: Boolean
    */
    var isBoolean = function(boolean) {
      return typeof boolean === 'boolean'
    }
    /*
      isCreditCardNumber()
      -Description: Determines whether or not an input is of valid credit card number format:
      1234-1234-1234-1234 OR 1234 1234 1234 1234 OR 1234123412341234
      -Parameters: [number, Any Type]
      -Return: Boolean
    */
    var isCreditCardNumber = function(number) {
      var re = /[\d]+((-|\s)?[\d]+)+/;
      return re.test(number)
    }
    /*
      isEmai()
      -Description: Determines whether or not passed data is an email address
      -Parameters: [email, Any Type]
      -Return: Boolean
    */
    var isEmail = function(email) {
      if (!isString(email)) {
        return false
      } else if (email.length > 120) {
        return false
      }
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    }
    /*
      isFunction()
      -Description: Determines whether or not an input is a function
      -Parameters: [functionVar, Any Type]
      -Return: Boolean
    */
    var isFunction = function(functionVar) {
      return typeof functionVar === 'function'
    }
    /*
      isNumber()
      -Description: Determines whether or not an input is a number
      -Parameters: [number, Any Type]
      -Return: Boolean
    */
    var isNumber = function(number) {
      return typeof number === 'number'
    }
    /*
      isObject()
      -Description: Determines whether or not an input is an object literal
      -Parameters: [object, Any Type]
      -Return: Boolean
    */
    var isObject = function(object) {
      return typeof object === 'object'
    }
    /*
      isString()
      -Description: Determines whether or not an input is a string
      -Parameters: [string, Any Type]
      -Return: Boolean
    */
    var isString = function(string) {
      return typeof string === 'string'
    }
    /*
      isTrue()
      -Description: Determines whether or not an input is the 'true' boolean value
      -Parameters: [input, Any Type]
      -Return: Boolean
    */
    var isTrue = function(input) {
      if (input === true) {
        return true
      } else {
        return false
      }
    }
    return {
      checkStringLength: checkStringLength,
      inArray: inArray,
      isArray: isArray,
      isBoolean: isBoolean,
      isCreditCardNumber: isCreditCardNumber,
      isEmail: isEmail,
      isFunction: isFunction,
      isNumber: isNumber,
      isObject: isObject,
      isString: isString,
      isTrue: isTrue
    }
  }])
})();
