(function () {
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['MenuService','UserInfoService']
function signUpController(MenuService,UserInfoService)  {
  var signUpCtrl = this;
  signUpCtrl.msjError = false;
  signUpCtrl.msjOK = false;
  signUpCtrl.submit = function() {
          var promise = MenuService.getMenuItem(signUpCtrl.user.favorite);
          promise.then(function (response){
                if (response.length === 0)
                {
                  signUpCtrl.msjError = true;
                }
                else {
                  signUpCtrl.msjOK = true;
                   UserInfoService.SaveInformation(signUpCtrl.user);
                }

          });
  };
};


      // console.log("estoy en submit");
      //   console.log(signUpCtrl.user.favorite);
      // $http.get(ApiPath + '/menu_items/' + signUpCtrl.user.favorite + '.json').then(function (response) {
      //      console.log(response.data);
      //      signUpCtrl.msjOK = true;
      //
      //
      //      UserInfoService.SaveInformation(signUpCtrl.user);
      // }, function (error) {
      //       signUpCtrl.msjError = true;
      //       //console.log(error);

      //});
})();
