// Arquivo capitulo-1/app.js completo
'use strict';
// Modulo da aplicaçao

var app = angular.module("helloWorldApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "partials/main.html"
            // controller : "MainCtrl"
        })
        .when("/show", {
            templateUrl : "partials/show.html"
            // controller : "ShowCtrl"
        })

});
