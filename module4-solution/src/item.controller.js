(function () {
'use strict';

angular.module('MenuApp')
       .controller("ItemController",ItemController);

ItemController.$inject = ["myItem"]
function ItemController(myItem){
      var item = this;
      item.myItem = myItem.menu_items;
      item.categoryName = myItem.category.name;
};

})();
