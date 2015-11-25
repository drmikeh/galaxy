'use strict';

describe('Controller: AttendanceCtrl', function () {

  // load the controller's module
  beforeEach(module('galaxyApp'));

  var AttendanceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttendanceCtrl = $controller('AttendanceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
