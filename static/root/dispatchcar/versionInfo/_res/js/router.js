var app = angular.module('versionInfo',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.dispatchcar.versionInfo", {
        url: "/versionInfo",
        views: {
            "content@root.dispatchcar": {
                templateUrl: "root/dispatchcar/versionInfo/_res/html/index.html",
                controller: "versionInfoCtrl"
            }
        }
    })
})