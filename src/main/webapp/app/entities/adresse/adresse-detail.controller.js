(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('AdresseDetailController', AdresseDetailController);

    AdresseDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Adresse', 'Pays', 'Ville'];

    function AdresseDetailController($scope, $rootScope, $stateParams, previousState, entity, Adresse, Pays, Ville) {
        var vm = this;

        vm.adresse = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('etatcivilApp:adresseUpdate', function(event, result) {
            vm.adresse = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
