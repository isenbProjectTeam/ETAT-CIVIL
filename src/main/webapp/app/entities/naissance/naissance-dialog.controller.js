(function () {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('NaissanceDialogController', NaissanceDialogController);

    NaissanceDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$state', 'DataUtils', 'entity', 'Naissance', 'User', 'Personne', 'Ville', 'Pays','PieceJointe'];

    function NaissanceDialogController($timeout, $scope, $stateParams, $state, DataUtils, entity, Naissance, User, Personne, Ville, Pays,PieceJointe) {
        var vm = this;
        vm.pieceJointe = PieceJointe;
        vm.pieceJointeB = {nom:null,nomContentType:null};
        vm.naissance = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.users = User.query();
        vm.personnes = Personne.query();
        vm.pays = Pays.query();
        vm.villes = Ville.query();
        vm.naissance.dateDeclaration = new Date();
        vm.modifierVillePourEnfant = modifierVillePourEnfant;
        vm.modifierVillePourPere= modifierVillePourPere;
        vm.modifierVillePourMere= modifierVillePourMere;
        vm.villesNaissanceEnfant = [];
        vm.villesNaissancePere = [];
        vm.villesNaissanceMere= [];
        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear() {
            $state.go('naissance', null, {reload: 'naissance'});
        }

        function save() {
            vm.isSaving = true;
            if (vm.naissance.id !== null) {
                Naissance.update(vm.naissance, onSaveSuccess, onSaveError);
            } else {
                Naissance.save(vm.naissance, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess(result) {
            $scope.$emit('etatcivilApp:naissanceUpdate', result);
            $state.go('naissance', null, {reload: 'naissance'});
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateDeclaration = false;
        vm.datePickerOpenStatus.dateNaissance_enfant = false;
        vm.datePickerOpenStatus.dateNaissance_mere = false;

        function openCalendar(date) {
            vm.datePickerOpenStatus[date] = true;
        }

        function modifierVillePourEnfant() {
            vm.villesNaissanceEnfant.length = 0;
            vm.villes.forEach(function (ville) {
                if (ville.pays.id == vm.naissance.enfant.paysNaissance.id) {
                    vm.villesNaissanceEnfant.push(ville);
                }
            })
        }
        function modifierVillePourPere() {
            vm.villesNaissancePere.length = 0;
            vm.villes.forEach(function (ville) {
                if (ville.pays.id == vm.naissance.pere.paysNaissance.id) {
                    vm.villesNaissancePere.push(ville);
                }
            })
        }
        function modifierVillePourMere() {
            vm.villesNaissanceMere.length = 0;
            vm.villes.forEach(function (ville) {
                if (ville.pays.id == vm.naissance.mere.paysNaissance.id) {
                    vm.villesNaissanceMere.push(ville);
                }
            })
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
        }

        vm.setNomB = function ($file, pieceJointe) {
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
