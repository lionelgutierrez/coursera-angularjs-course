(function () {
'use strict';

angular.module('MenuApp')
       .controller("CategoriesController",CategoriesController);

CategoriesController.$inject = ["myCat"]
function CategoriesController(myCat){
      var categories = this;
      //  console.log(myCat);
      categories.myCategories = myCat;
};

})();
