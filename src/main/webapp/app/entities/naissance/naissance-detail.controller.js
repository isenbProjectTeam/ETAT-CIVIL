(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('NaissanceDetailController', NaissanceDetailController);

    NaissanceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Naissance', 'User', 'Personne', 'Ville'];

    function NaissanceDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Naissance, User, Personne, Ville) {
        var vm = this;

        vm.naissance = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('etatcivilApp:naissanceUpdate', function(event, result) {
            vm.naissance = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
