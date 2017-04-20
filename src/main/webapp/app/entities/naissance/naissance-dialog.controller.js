(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('NaissanceDialogController', NaissanceDialogController);

    NaissanceDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Naissance', 'User', 'Personne', 'Ville'];

    function NaissanceDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Naissance, User, Personne, Ville) {
        var vm = this;

        vm.naissance = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.users = User.query();
        vm.personnes = Personne.query();
        vm.villes = Ville.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.naissance.id !== null) {
                Naissance.update(vm.naissance, onSaveSuccess, onSaveError);
            } else {
                Naissance.save(vm.naissance, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('etatcivilApp:naissanceUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateDeclaration = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
