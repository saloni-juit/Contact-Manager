'use strict';

describe('AddContact', function () {

  var newContactCtrl,scope,rootScope,location;

  beforeEach(module('contactManagerApp'));

  beforeEach(inject(function ($controller, $rootScope,$location) {
    scope = $rootScope.$new();
    spyOn($location, 'path').and.returnValue('/new');
    location = $location;
    scope.path = $location.path();
    rootScope = $rootScope.$new();
   
    newContactCtrl = $controller('newContactCtrl', {
      $scope: scope,
     $rootScope : rootScope
    });

  }));

  it('State of the creating new contact page',function(){
    expect(scope.state).toBe('Create');
  });

  it('State of the creating new contact page',function(){
    expect(scope.state).toBe('Create');
  });

  it('Adding a new contact',function(){
    var oldLength = rootScope.contacts.length;
    scope.contact = {'name' :'test name','email':'testname@gmail.com','tel':'0000000000'};
    scope.editSubmit();
    expect(rootScope.contacts.length).toBe(oldLength+1);
  });

});