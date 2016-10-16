(function () {
"use strict";

angular.module("LunchCheck", [])
       .controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope)  {

  $scope.placeholder_msg =  "list comma separated dishes you usually have for lunch(NOT consider and empty item, i.e., , , as an item towards to the count)";

  $scope.cheButtonControl = function () {
        //console.log($scope.dishes);

        if ($scope.dishes == "" || $scope.dishes == null ) {
           $scope.specialClass = "redCase";
           $scope.specialClassBoder ="redBorder";
           $scope.MessagetoUser = "Please enter data first";
        }
        else{
            $scope.specialClassBoder ="greenBorder";
            $scope.specialClass = "greenCase";
            var cont = ParseItems($scope.dishes);
            console.log(cont);
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
     //Deleting empty items (comma with no text)
     arrayOfStrings = arrayOfStrings.filter(function(n){ return n != "" });
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
