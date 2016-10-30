(function(){
"use strict";

angular.module("NarrowItDownApp",[])
       .controller("NarrowItDownController",NarrowItDownController)
       .service("MenuSearchService",MenuSearchService)
       .constant('ApiEndPoint', "https://davids-restaurant.herokuapp.com/menu_items.json")
       .directive("foundItems",foundItemsDirective);

NarrowItDownController.$inject = ["MenuSearchService"]
function NarrowItDownController(MenuSearchService){
    var Ctrl = this;
    Ctrl.searchTerm = "";
    //Ctrl.found = [];

    Ctrl.getMatchedMenuItems = function () {
        //console.log("in getMatchedMenuItems function");
        if (Ctrl.searchTerm === "") {
            Ctrl.found = [];
        }
        else {
          var promise = MenuSearchService.getMatchedMenuItems(Ctrl.searchTerm);
          promise.then(function (response){
              Ctrl.found = response;
              //console.log("in getMatchedMenuItems function");
              //console.log(Ctrl.found);
          });
        }

    };

    Ctrl.removeItem = function (index){
          Ctrl.found.splice(index,1);
    };


};
MenuSearchService.$inject = ['$http', 'ApiEndPoint']
function MenuSearchService($http,ApiEndPoint){
    var service = this;


    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
              method: "GET",
              url: ApiEndPoint
              })
              .then(function (response){
                  var array = response.data;
                  var found = [];
                  //console.log(array);
                  //console.log(array.menu_items.length);
                  //search in response for items with searTerm
                  //console.log(searchTerm.toLowerCase());
                  for (var i = 0; i < array.menu_items.length; i++) {
                      var name = array.menu_items[i].short_name;
                      //console.log(name);

                      if (name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                          found.push(array.menu_items[i]);
                      }
                  }

                  return found;
              })
              .catch(function (error){
                  console.log(error);
                  return [];
              });
    };
};

function foundItemsDirective() {
  var ddo = {
        templateUrl: 'listItem.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: foundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
  };

  return ddo;
};

function foundItemsDirectiveController(){
    var list = this;

    list.emptyList = function () {
        return (list.items.length == 0 && list.items != undefined);
    };
};


})();
