'use strict';
(function() {

function MainController($scope, Auth, $window, $http, socket) {
  var self = this;

  self.isLoggedIn = Auth.isLoggedIn;
  self.isAdmin = Auth.isAdmin;
  self.getCurrentUser = Auth.getCurrentUser;

  // TODO: sample data
  self.cohort = {
    name: 'ATL WDI #5',
    students: [
      { name: 'Clark Kent', age: 27 },
      { name: 'Bruce Wayne', age: 33 },
      { name: 'Oliver Queen', age: 24 },
      { name: 'Barbara Gordon', age: 22 },
      { name: 'Barry Allen', age: 21 },
      { name: 'Tony Stark', age: 21 },
      { name: 'Elon Musk', age: 39 },
      { name: 'Steve Jobs', age: 44 }
    ]
  };

  self.loginOauth = function(provider) {
    $window.location.href = '/auth/' + provider;
  };

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
