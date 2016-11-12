(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['MenuService','UserInfoService','ApiPath']
function myInfoController(MenuService,UserInfoService,ApiPath)  {
  var myInfoCtrl = this;

  myInfoCtrl.user = UserInfoService.getUserInformation();
  myInfoCtrl.menuName = '';
  myInfoCtrl.menuDescription = '';
  myInfoCtrl.basePath = ApiPath;
  // If user is available i get the dish information from the service
  if (myInfoCtrl.user.firstname.length !==0)
  {
      var promise = MenuService.getMenuItem(myInfoCtrl.user.favorite);
      promise.then(function (response){
            if (response.length !== 0)
            {
              myInfoCtrl.menuName = response.name;
              myInfoCtrl.menuDescription = response.description;
            }
      });
  };

};


})();
