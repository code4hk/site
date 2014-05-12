'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('site', [
    'ngRoute',
    // 'ui.bootstrap',
    'site.filters',
    'site.services',
    'site.directives',
    'site.controllers',
    'jm.i18next'
]).config(['$routeProvider',
    function($routeProvider) {

    }
]).filter('t',['$i18next',function(i18next){
    return function(input){
        return i18next(input);
    }
}]);


angular.module('jm.i18next')
.config(['$i18nextProvider',function ($i18nextProvider) {
    $i18nextProvider.options = {
        useCookie: false,
        useLocalStorage: false,
        load: 'current',
        fallbackLng: 'zh-TW',
        resGetPath: '../locales/__lng__/__ns__.json',
        ns: {
        namespaces: ['site_main'],
        defaultNs: 'site_main'
      }
    };

    // http://localhost:8005/?setLng=en/
}]);

angular.module('site.controllers', ["ngSanitize", "angular-lifestream"]).
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
