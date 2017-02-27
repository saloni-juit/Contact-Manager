'use strict';

describe('ManageContacts', function () {

  var MainCtrl,scope,rootScope,location;

  // load the controller's module
  beforeEach(module('contactManagerApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$location) {
    scope = $rootScope.$new();
    rootScope = $rootScope.$new();
    location = $location;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
     $rootScope : rootScope
    });
  }));

  it('Attach a list of contacts to the root scope', function () {
    expect(rootScope.contacts.length).toBe(6);
  });

  it('Deleting an element from the contacts', function () {
    var index = 0;
    var elementToBeDeleted = rootScope.contacts[index];
    scope.deleteContact(0);
    expect(rootScope.contacts[index]).not.toBe(elementToBeDeleted);
    expect(rootScope.contacts.length).toBe(5);
  });

  it('Redirection to edit page for editing contact', function () {
    spyOn(location, 'path');  
    var index = 0;
    scope.editContact(0);
    expect(location.path).toHaveBeenCalledWith('/edit/'+index);
  });

  it('Redirection to add page for adding contact', function () {
    spyOn(location, 'path');  
    scope.addContact();
    expect(location.path).toHaveBeenCalledWith('/new/');
  });


});


    