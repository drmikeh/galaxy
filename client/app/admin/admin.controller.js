'use strict';

angular.module('galaxyApp')
  .controller('AdminCtrl', function($http, Auth, User) {

    // Use the User $resource to fetch all users
    this.users = User.query();

    this.delete = function(user) {
      User.remove({ id: user._id });
      this.users.splice(this.$index, 1);
    };
  });
