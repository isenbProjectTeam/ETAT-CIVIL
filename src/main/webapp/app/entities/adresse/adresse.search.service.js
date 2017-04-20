(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .factory('AdresseSearch', AdresseSearch);

    AdresseSearch.$inject = ['$resource'];

    function AdresseSearch($resource) {
        var resourceUrl =  'api/_search/adresses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
