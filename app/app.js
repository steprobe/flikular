(function() {

    var app = angular.module('flikrModule', ['ngRoute']);

    app.config(function($routeProvider) {
        console.log('ere we be');
        $routeProvider
            .when('/', {
                controller: 'ImagesController',
                templateUrl: 'app/views/images.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
}());