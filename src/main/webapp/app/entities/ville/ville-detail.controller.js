(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('VilleDetailController', VilleDetailController);

    VilleDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Ville', 'Pays'];

    function VilleDetailController($scope, $rootScope, $stateParams, previousState, entity, Ville, Pays) {
        var vm = this;

        vm.ville = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('etatcivilApp:villeUpdate', function(event, result) {
            vm.ville = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
