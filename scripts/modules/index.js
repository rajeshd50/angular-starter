'use strict';

module.exports =
    window.angular.module('StarterApp.modules', [	
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function(
            $stateProvider,
            $urlRouterProvider,
            $locationProvider
        ) {
            $urlRouterProvider.when('/', '/home');
            $urlRouterProvider.when('', '/home');
            $urlRouterProvider.otherwise('/404');

            $locationProvider.hashPrefix('!');
            
            // $locationProvider.html5Mode(true);
            
            $stateProvider
            .state('home', {
                url: '/home',
                template: require('./templates/home.html'),
                // controller: require(),
                // controllerAs: 'vm'
            });
        }
    ])
    .directive('abstractDir',require('./directives/abstract-directive.js'))
    .controller('abstractCtl',require('./controllers/abstract-ctl.js'));