(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('PaysDetailController', PaysDetailController);

    PaysDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Pays'];

    function PaysDetailController($scope, $rootScope, $stateParams, previousState, entity, Pays) {
        var vm = this;

        vm.pays = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('etatcivilApp:paysUpdate', function(event, result) {
            vm.pays = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
