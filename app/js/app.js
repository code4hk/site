'use strict';


// Declare app level module which depends on filters, and services
angular.module('site', [
    'ngRoute',
    // 'ui.bootstrap',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'site.controllers',
    'jm.i18next'
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
])
.filter('t',['$i18next',function(i18next){
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
