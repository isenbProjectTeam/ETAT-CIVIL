(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('PersonneDetailController', PersonneDetailController);

    PersonneDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Personne', 'Adresse', 'Pays', 'Ville'];

    function PersonneDetailController($scope, $rootScope, $stateParams, previousState, entity, Personne, Adresse, Pays, Ville) {
        var vm = this;

        vm.personne = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('etatcivilApp:personneUpdate', function(event, result) {
            vm.personne = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
