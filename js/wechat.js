var app = angular.module("myApp",['ui.router','ionic']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('last');
    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    });
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
        .state('contactdata',{
            url:'/contact/contactdata/:id',
            controller:'contactdataCtrl',
            templateUrl:'views/contact/contactdata.html'
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

