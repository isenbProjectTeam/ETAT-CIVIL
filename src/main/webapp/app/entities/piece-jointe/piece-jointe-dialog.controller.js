(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('PieceJointeDialogController', PieceJointeDialogController);

    PieceJointeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'PieceJointe', 'Naissance'];

    function PieceJointeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, PieceJointe, Naissance) {
        var vm = this;

        vm.pieceJointe = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.naissances = Naissance.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.pieceJointe.id !== null) {
                PieceJointe.update(vm.pieceJointe, onSaveSuccess, onSaveError);
            } else {
                PieceJointe.save(vm.pieceJointe, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('etatcivilApp:pieceJointeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setNom = function ($file, pieceJointe) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        pieceJointe.nom = base64Data;
                        pieceJointe.nomContentType = $file.type;
                    });
                });
            }
        };

    }
})();
