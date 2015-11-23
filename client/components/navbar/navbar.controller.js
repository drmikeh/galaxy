'use strict';

angular.module('galaxyApp')
  .controller('NavbarCtrl', function (Auth, $window) {
    this.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    this.isCollapsed = true;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    this.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

  });
