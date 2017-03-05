(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
$scope.result="";
$scope.name="";
$scope.verify = function () {
$scope.name=$scope.name.trim();
var $nameArray = $scope.name.split(",");
var $length = $nameArray.length;
if ($scope.name === "") {
  $scope.result = "Please enter data first.";
}
else {
  if ($length <= 3) {
    $scope.result = "Enjoy!";
  }
  else {
    $scope.result = "Too much!";
  }
}
};
}
})();
