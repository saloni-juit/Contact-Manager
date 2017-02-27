'use strict';

describe('EditContact', function () {

  var EditCtrl,scope,rootScope,location;

  beforeEach(module('contactManagerApp'));

  beforeEach(inject(function ($controller, $rootScope,$location) {
    scope = $rootScope.$new();
    spyOn($location, 'path').and.returnValue('/edit/0');
    location = $location;
    scope.path = $location.path();
    rootScope = $rootScope.$new();
   
    EditCtrl = $controller('EditCtrl', {
      $scope: scope,
     $rootScope : rootScope
    });

  }));

  it('State of the edit page',function(){
    expect(scope.state).toBe('Edit');
  });

  it('Submit an edited contact', function () {
    var index = 0;
    var elementToBeEdited = rootScope.contacts[index];
    var newName =  'Test Name';
    scope.contact = {'name' :newName,'email':elementToBeEdited.email,'tel':elementToBeEdited.tel};
    scope.editSubmit();
    expect(rootScope.contacts[index].name).toBe(newName);
    
  });
});

