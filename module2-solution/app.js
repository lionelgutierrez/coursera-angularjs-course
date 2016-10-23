(function (){
"use strict";

angular.module("ShoppingListCheckOff",[])
      .controller("AlreadyBoughtController", AlreadyBoughtController)
      .controller("ToBuyController", ToBuyController)
      .service("ShoppingListCheckOffService",ShoppingListCheckOffService);


AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var Bought = this;

    Bought.items = ShoppingListCheckOffService.getBoughtItems();

};

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
     var ToBuy = this;
     ToBuy.items = ShoppingListCheckOffService.getToBuyItems();

     ToBuy.BoughtItem = function(Itemindex) {
     ShoppingListCheckOffService.BoughtItem(Itemindex);
     };
};


function ShoppingListCheckOffService() {
    var service = this;

    var ToBuyItem = [
      {
        name: "cookies",
        quantity: 20
      },
      {
        name: "Beers",
        quantity: 5
      },
      {
        name: "chocolates",
        quantity: 15
      },
      {
        name: "Cocas",
        quantity: 7
      },
      {
        name: "candies",
        quantity: 8
      },
      {
        name: "Eggs",
        quantity: 12
      }

    ];

    var BoughtItems = [];

    service.getToBuyItems = function () {
        return ToBuyItem;
    };

    service.getBoughtItems = function () {
         return BoughtItems;
    };

    service.BoughtItem = function (Itemindex) {
        var item = ToBuyItem[Itemindex];
        ToBuyItem.splice(Itemindex,1);
        BoughtItems.push(item);
    };

 };

})();
