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
        });
    }]);

