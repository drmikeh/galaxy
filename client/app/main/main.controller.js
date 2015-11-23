'use strict';
(function() {

function MainController($scope, Auth, $http, socket, ) {
  var self = this;

  self.isLoggedIn = Auth.isLoggedIn;
  self.isAdmin = Auth.isAdmin;
  self.getCurrentUser = Auth.getCurrentUser;

  // TODO: REMOVE OLD CODE AND FIX UNIT TEST
  self.awesomeThings = [];

  $http.get('/api/things').then(function(response) {
    self.awesomeThings = response.data;
    socket.syncUpdates('thing', self.awesomeThings);
  });

  self.addThing = function() {
    if (self.newThing === '') {
      return;
    }
    $http.post('/api/things', { name: self.newThing });
    self.newThing = '';
  };

  self.deleteThing = function(thing) {
    $http.delete('/api/things/' + thing._id);
  };

  $scope.$on('$destroy', function() {
    socket.unsyncUpdates('thing');
  });
}

angular.module('galaxyApp')
  .controller('MainController', MainController);

})();
