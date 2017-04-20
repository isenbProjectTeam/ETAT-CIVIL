(function() {
    'use strict';
    angular
        .module('etatcivilApp')
        .factory('Naissance', Naissance);

    Naissance.$inject = ['$resource', 'DateUtils'];

    function Naissance ($resource, DateUtils) {
        var resourceUrl =  'api/naissances/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateDeclaration = DateUtils.convertDateTimeFromServer(data.dateDeclaration);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
