(function() {
    'use strict';

    angular
        .module('etatcivilApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('naissance', {
            parent: 'entity',
            url: '/naissance',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'etatcivilApp.naissance.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/naissance/naissances.html',
                    controller: 'NaissanceController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('naissance');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('naissance-detail', {
            parent: 'naissance',
            url: '/naissance/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'etatcivilApp.naissance.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/naissance/naissance-detail.html',
                    controller: 'NaissanceDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('naissance');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Naissance', function($stateParams, Naissance) {
                    return Naissance.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'naissance',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('naissance-detail.edit', {
            parent: 'naissance-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/naissance/naissance-dialog.html',
                    controller: 'NaissanceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Naissance', function(Naissance) {
                            return Naissance.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('naissance.new', {
            parent: 'naissance',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/naissance/naissance-dialog.html',
                    controller: 'NaissanceDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: function () {
                    return {
                        numeroRegistre: null,
                        mentionMarginale: null,
                        dateDeclaration: null,
                        id: null
                    };
                }
            }

           /* onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/naissance/naissance-dialog.html',
                    controller: 'NaissanceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                numeroRegistre: null,
                                mentionMarginale: null,
                                dateDeclaration: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('naissance', null, { reload: 'naissance' });
                }, function() {
                    $state.go('naissance');
                });
            }]*/
        })
        .state('naissance.edit', {
            parent: 'naissance',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/naissance/naissance-dialog.html',
                    controller: 'NaissanceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Naissance', function(Naissance) {
                            return Naissance.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('naissance', null, { reload: 'naissance' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('naissance.delete', {
            parent: 'naissance',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/naissance/naissance-delete-dialog.html',
                    controller: 'NaissanceDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Naissance', function(Naissance) {
                            return Naissance.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('naissance', null, { reload: 'naissance' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
