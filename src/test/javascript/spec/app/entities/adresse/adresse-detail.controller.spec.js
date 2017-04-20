'use strict';

describe('Controller Tests', function() {

    describe('Adresse Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockAdresse, MockPays, MockVille;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockAdresse = jasmine.createSpy('MockAdresse');
            MockPays = jasmine.createSpy('MockPays');
            MockVille = jasmine.createSpy('MockVille');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Adresse': MockAdresse,
                'Pays': MockPays,
                'Ville': MockVille
            };
            createController = function() {
                $injector.get('$controller')("AdresseDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'etatcivilApp:adresseUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
