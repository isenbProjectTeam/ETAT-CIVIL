(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .controller('PersonneController', PersonneController);

    PersonneController.$inject = ['Personne', 'PersonneSearch', 'ParseLinks', 'AlertService', 'paginationConstants'];

    function PersonneController(Personne, PersonneSearch, ParseLinks, AlertService, paginationConstants) {

        var vm = this;

        vm.personnes = [];
        vm.loadPage = loadPage;
        vm.itemsPerPage = paginationConstants.itemsPerPage;
        vm.page = 0;
        vm.links = {
            last: 0
        };
        vm.predicate = 'id';
        vm.reset = reset;
        vm.reverse = true;
        vm.clear = clear;
        vm.loadAll = loadAll;
        vm.search = search;

        loadAll();

        function loadAll () {
            if (vm.currentSearch) {
                PersonneSearch.query({
                    query: vm.currentSearch,
                    page: vm.page,
                    size: vm.itemsPerPage,
                    sort: sort()
                }, onSuccess, onError);
            } else {
                Personne.query({
                    page: vm.page,
                    size: vm.itemsPerPage,
                    sort: sort()
                }, onSuccess, onError);
            }
            function sort() {
                var result = [vm.predicate + ',' + (vm.reverse ? 'asc' : 'desc')];
                if (vm.predicate !== 'id') {
                    result.push('id');
                }
                return result;
            }

            function onSuccess(data, headers) {
                vm.links = ParseLinks.parse(headers('link'));
                vm.totalItems = headers('X-Total-Count');
                for (var i = 0; i < data.length; i++) {
                    vm.personnes.push(data[i]);
                }
            }

            function onError(error) {
                AlertService.error(error.data.message);
            }
        }

        function reset () {
            vm.page = 0;
            vm.personnes = [];
            loadAll();
        }

        function loadPage(page) {
            vm.page = page;
            loadAll();
        }

        function clear () {
            vm.personnes = [];
            vm.links = {
                last: 0
            };
            vm.page = 0;
            vm.predicate = 'id';
            vm.reverse = true;
            vm.searchQuery = null;
            vm.currentSearch = null;
            vm.loadAll();
        }

        function search (searchQuery) {
            if (!searchQuery){
                return vm.clear();
            }
            vm.personnes = [];
            vm.links = {
                last: 0
            };
            vm.page = 0;
            vm.predicate = '_score';
            vm.reverse = false;
            vm.currentSearch = searchQuery;
            vm.loadAll();
        }
    }
})();
