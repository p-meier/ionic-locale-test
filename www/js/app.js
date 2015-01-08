// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'pascalprecht.translate'])

    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            hello_message: "Howdy",
            goodbye_message: "Goodbye"
        });
        $translateProvider.translations('de', {
            hello_message: "Hallo",
            goodbye_message: "Tschüss"
        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    })

    .run(function ($ionicPlatform, $translate) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            if (navigator.globalization) {
                navigator.globalization.getPreferredLanguage(function (language) {

                    var isoLangCode = language.value.split("-")[0];

                    $translate.use(isoLangCode).then(function (data) {
                        alert("Successful: " + isoLangCode);
                    }, function (error) {
                        alert("Error: " + error);
                    });

                }, null);
            }
        });
    })

    .controller("AppCtrl", function ($scope, $translate) {

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

    })
