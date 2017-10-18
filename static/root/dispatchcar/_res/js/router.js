var app = angular.module('dispatchcarModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.dispatchcar", {
        url: "/dispatchcar",
        views: {
            "content@root": {
                templateUrl: "root/dispatchcar/_res/html/index.html",
                controller: "rewardsCtrl"
            },"nav@root":{
                templateUrl: "root/dispatchcar/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});