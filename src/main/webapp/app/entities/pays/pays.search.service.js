(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .factory('PaysSearch', PaysSearch);

    PaysSearch.$inject = ['$resource'];

    function PaysSearch($resource) {
        var resourceUrl =  'api/_search/pays/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
