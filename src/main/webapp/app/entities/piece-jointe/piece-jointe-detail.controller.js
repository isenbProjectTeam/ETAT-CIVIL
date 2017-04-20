(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('PieceJointeDetailController', PieceJointeDetailController);

    PieceJointeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'PieceJointe', 'Naissance'];

    function PieceJointeDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, PieceJointe, Naissance) {
        var vm = this;

        vm.pieceJointe = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('etatcivilApp:pieceJointeUpdate', function(event, result) {
            vm.pieceJointe = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
