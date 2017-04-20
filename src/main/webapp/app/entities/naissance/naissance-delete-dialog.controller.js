(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('NaissanceDeleteController',NaissanceDeleteController);

    NaissanceDeleteController.$inject = ['$uibModalInstance', 'entity', 'Naissance'];

    function NaissanceDeleteController($uibModalInstance, entity, Naissance) {
        var vm = this;

        vm.naissance = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Naissance.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
