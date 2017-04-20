(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .factory('PersonneSearch', PersonneSearch);

    PersonneSearch.$inject = ['$resource'];

    function PersonneSearch($resource) {
        var resourceUrl =  'api/_search/personnes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
