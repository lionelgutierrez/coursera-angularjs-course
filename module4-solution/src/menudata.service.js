(function() {
"use strict";

angular.module("data")
       .constant('ApiEndPoint', "https://davids-restaurant.herokuapp.com/")
       .service("MenuDataService",MenuDataService);

MenuDataService.$inject = ['$http','ApiEndPoint']
function MenuDataService($http,ApiEndPoint) {
      var service = this;

      service.getAllCategories = function(){
            var promise = $http({
                      method: "GET",
                      url: ApiEndPoint + "categories.json"
            })
            .then(function(response) {
                  // console.log(response.data);
                  var array = response.data;
                  return array;
            })
            .catch(function(error){
                  console.log(error);
                  return [];
            });

            return promise;
      };

      service.getItemsForCategory = function(categoryShortName) {
          var promise = $http({
                    method: "GET",
                    url: ApiEndPoint + "menu_items.json",
                    params: {category: categoryShortName}
          })
          .then(function(response) {
                var array = response.data;
                return array;
          })
          .catch(function(error){
                console.log(error);
                return [];
          });

          return promise;

      };
};

})();
