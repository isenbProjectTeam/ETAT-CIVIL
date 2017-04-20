(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .factory('RegistreNaissanceSearch', RegistreNaissanceSearch);

    RegistreNaissanceSearch.$inject = ['$resource'];

    function RegistreNaissanceSearch($resource) {
        var resourceUrl =  'api/_search/registre-naissances/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
