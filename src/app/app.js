(function () {


    var app = angular.module('Technician-Mobile-App', [
		'ui.router',
		'ui.mask',
		'ui.bootstrap',
		'ui.validate',
		'ngMessages', //
		'webStorageModule', // module to store stuff in session and or local storage
        'cgBusy', // directive for the busy indication

        'templates-app',
        'Technician-Mobile-App.controller',

        'common.directives.keybinding',
        'common.directives.numbers'
    ]);

    app.config(function myAppConfig($stateProvider, $urlRouterProvider, $compileProvider, $provide, constants) {

        $urlRouterProvider.otherwise('/login');

    });

    // run application
    app.run(function ($log, $httpBackend, constants) {
    });

}());