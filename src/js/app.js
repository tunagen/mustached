'use strict';

var mustache = angular.module('mustache',['ui.router','treeControl']);

mustache.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);