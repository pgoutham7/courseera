(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
$scope.name="";
$scope.verify = function () {
var comma = ',';
var x = "hi";
var message = splitString($scope.name);
$scope.result=message;
console.log($scope.x);
};
}
function splitString($scope.name) {

var stringvalue = $scope.name;
var stringsentered = stringvalue.split(,);
var length = stringsentered.length;

switch(length) {
case '0':return "Please enter data first";
case '1': return "Enjoy!";
case '2': return "Enjoy!";
case '3': return "Enjoy!";
default: return "Too much!";
}
}
console.log("hi");
})(); 