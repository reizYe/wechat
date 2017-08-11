var app = angular.module("myApp",['ui.router','ionic']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('last');
    $stateProvider
        .state('last',{
            url:'/last',
            controller:'lastCtrl',
            templateUrl:'views/last.html'
    })
        .state('contact',{
            url:'/contact',
            controller:'contactCtrl',
            templateUrl:'views/contact.html'
        })
        .state('find',{
            url:'/find',
            controller:'findCtrl',
            templateUrl:'views/find.html'
        })
        .state('me',{
            url:'/me',
            controller:'meCtrl',
            templateUrl:'views/me.html'
        })
        .state('setting',{
            url:'/me/setting',
            controller:'settingCtrl',
            templateUrl:'views/me/setting.html'
        })
        .state('message',{
            url:'/me/message',
            controller:'messageCtrl',
            templateUrl:'views/me/message.html'
        })
})

