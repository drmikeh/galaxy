'use strict';

angular.module('galaxyApp')
  .controller('SettingsCtrl', function(Auth) {
    this.getCurrentUser = Auth.getCurrentUser;
  });
