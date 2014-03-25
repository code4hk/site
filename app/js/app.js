'use strict';


// Declare app level module which depends on filters, and services

    angular.module('site', [
        'ngRoute',
        // 'ui.bootstrap',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'site.controllers',
        "angular-lifestream"
    ]).
    config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'partials/partial1.html',
                controller: 'MyCtrl1'
            });
            $routeProvider.when('/view2', {
                templateUrl: 'partials/partial2.html',
                controller: 'MyCtrl2'
            });
            $routeProvider.otherwise({
                redirectTo: '/view1'
            });
        }
    ]);

    angular.module('site.controllers', ['ngSanitize']).
    controller('lifestreamCtrl', ['$scope',
        function($scope) {

            $scope.lifestreamConfig = {
                theme: "lifestream-light-theme",
                list: [{
                    service: "github_org",
                    user: "code4hk",
                }, {
                    service: "twitter",
                    user: "code4hk"
                }, {
                    service: "facebook_page",
                    user: "code4hk"
                }]
            };


        }
    ]);
    angular.bootstrap(document, ["site"]);
