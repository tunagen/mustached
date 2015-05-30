/**
 * Created by jean on 5/8/15.
 */
'use strict';

angular.module('mustache').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main', {
            url: '/',
            controller: 'mainCtrl',
            templateUrl: '/shell/main.html'
        })
            .state('layout', {
                url: '/layout',
                controller: 'layoutCtrl',
                templateUrl: '/layout/layout.html'
            })
            .state('layout.explorer', {
                url: '/explorer',
                controller: 'explorerCtrl',
                templateUrl: '/explorer/explorer.html'
            });
    }]);

