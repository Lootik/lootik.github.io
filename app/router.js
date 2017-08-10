VS.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: "/",
                template: require('./shared/app-layout.html')
            })
            .state('main.custom', {
                url: "custom",
                template: "<virtual-scroll-grid></virtual-scroll-grid>"
            })
            .state('main.material', {
                url: "material",
                template: "<material-scroll-grid></material-scroll-grid>"
            });
        $urlRouterProvider.otherwise("custom");
    }]);
