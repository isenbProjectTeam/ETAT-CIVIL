(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .factory('PieceJointeSearch', PieceJointeSearch);

    PieceJointeSearch.$inject = ['$resource'];

    function PieceJointeSearch($resource) {
        var resourceUrl =  'api/_search/piece-jointes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
