'use strict';

describe('Controller Tests', function() {

    describe('Naissance Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockNaissance, MockUser, MockPersonne, MockVille;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockNaissance = jasmine.createSpy('MockNaissance');
            MockUser = jasmine.createSpy('MockUser');
            MockPersonne = jasmine.createSpy('MockPersonne');
            MockVille = jasmine.createSpy('MockVille');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Naissance': MockNaissance,
                'User': MockUser,
                'Personne': MockPersonne,
                'Ville': MockVille
            };
            createController = function() {
                $injector.get('$controller')("NaissanceDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'etatcivilApp:naissanceUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
