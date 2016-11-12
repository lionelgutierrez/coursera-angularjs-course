(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;
  service.user = {firstname: '', lastname: '', email: '', phone: '', favorite: ''};


  service.SaveInformation = function (user) {
      service.user = user;
      // console.log('saving user');
  };

  service.getUserInformation = function () {
        return service.user;
  };
};

})();
