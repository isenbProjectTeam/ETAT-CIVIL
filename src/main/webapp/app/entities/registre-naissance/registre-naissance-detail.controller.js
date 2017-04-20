(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('RegistreNaissanceDetailController', RegistreNaissanceDetailController);

    RegistreNaissanceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RegistreNaissance', 'Naissance'];

    function RegistreNaissanceDetailController($scope, $rootScope, $stateParams, previousState, entity, RegistreNaissance, Naissance) {
        var vm = this;

        vm.registreNaissance = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('etatcivilApp:registreNaissanceUpdate', function(event, result) {
            vm.registreNaissance = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
