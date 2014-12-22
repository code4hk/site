'use strict';

// Declare app level module which depends on filters, and services
angular.module('site', [
  'ngRoute',
  // 'ui.bootstrap',
  'site.filters',
  'site.services',
  'site.directives',
  'site.controllers',
  'jm.i18next'
]).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl',
        resolve: {}
      })
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'LandingCtrl',
        resolve: {}
      })
      .otherwise('/');
    $locationProvider.html5Mode(false);
  }
]).filter('t', ['$i18next', function(i18next) {
  return function(input) {
    return i18next(input);
  }
}]);


angular.module('jm.i18next')
  .config(['$i18nextProvider', function($i18nextProvider) {
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

angular.module('site.controllers', ["ngSanitize", "angular-lifestream"]).controller(
    'lifestreamCtrl', ['$scope',
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
    ])
  .controller('LandingCtrl', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
      $scope.goTo = function(hash) {
        console.log('hash=' + hash);
        $location.hash(hash);
        $anchorScroll();
      };

    }
  ])
  .controller('ActivitiesCtrl', ['$scope', '$location',
    function($scope, $location) {

    }
  ])
  .controller('AboutCtrl', ['$scope', '$location',
    function($scope, $location) {}
  ]);


angular.element(document).ready(function() {
  angular.bootstrap(document, ["site"]);
});
