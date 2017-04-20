(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .factory('NaissanceSearch', NaissanceSearch);

    NaissanceSearch.$inject = ['$resource'];

    function NaissanceSearch($resource) {
        var resourceUrl =  'api/_search/naissances/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
