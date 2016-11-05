(function() {
"use strict";

angular.module("data")
       .component('items', {
          templateUrl: "src/item.component.template.html",
          bindings: {
                    myItems : '<'
          }
       });

})();
