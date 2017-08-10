require('style!./main.css');
var constants = require('./constants');

VS = angular.module('VS', [
    'customVirtualScroll',
    'materialVirtualScroll',
    'ngMaterial',
    'ui.router'
]).config(['$sceDelegateProvider', function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'https://en.wikipedia.org/**'
        ]);
    }]);

VS.run(['$rootScope', '$state', '$timeout', function ($rootScope, $state, $timeout) {
        $rootScope.pagesAmount = constants.WIKI_PAGES_DISPLAY;
        $timeout(function () {
            $rootScope.currentNavItem = $state.current.name;
        }, 0, false);
    }]);
//router
require('./router');

//modules
require('./modules/customVirtualScroll/customVirtualScroll');
require('./modules/materialVirtualScroll/materialVirtualScroll');

//Serveces
require('./shared/services/wikiService');
  