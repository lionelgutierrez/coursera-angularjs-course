(function () {
"use strict";

angular.module("LunchCheck", [])
       .controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope)  {

  $scope.placeholder_msg =  "list comma separated dishes you usually have for lunch!";

  $scope.cheButtonControl = function () {
        //console.log($scope.dishes);

        if ($scope.dishes == "" || $scope.dishes == null ) {
           $scope.MessagetoUser = "Please enter data first";
        }
        else{
            var cont = ParseItems($scope.dishes);
            //console.log(cont);
            if (cont > 3) {
               $scope.MessagetoUser = "Too much!";
            }
            else {
               $scope.MessagetoUser = "Enjoy!";
            }
        }

  };

  function ParseItems(message) {
     var arrayOfStrings = message.split(",");
      return arrayOfStrings.length;
  };

}

})();



(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
