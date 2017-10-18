var app = angular.module('changeModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.dispatchcarrecordcollect", {
        url : "/dispatchcarrecordcollect",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/dispatchcarrecordcollect/_res/html/index.html",
                controller:"disCollectCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/dispatchcarrecordcollect/_res/html/menu.html",
                controller:"disCollCtrl"
            }
        }
    }).state("root.dispatchcar.dispatchcarrecordcollect.allCollect[12]",{
        url:"/allCollect[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarrecordcollect":{
                templateUrl : "root/dispatchcar/dispatchcarrecordcollect/allCollect/_res/html/index.html",
                controller:'allCollectCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarrecordcollect.dayCollect[12]",{
        url:"/dayCollect[12]",
        views:{
            "content@root.dispatchcar.dispatchcarrecordcollect":{
                templateUrl : "root/dispatchcar/dispatchcarrecordcollect/dayCollect/_res/html/index.html",
                controller:'dayCollectCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarrecordcollect.monthCollect[12]",{
        url:"/monthCollect[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarrecordcollect":{
                templateUrl : "root/dispatchcar/dispatchcarrecordcollect/monthCollect/_res/html/index.html",
                controller:'monthCollectCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarrecordcollect.weekCollect[12]",{
        url:"/weekCollect[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarrecordcollect":{
                templateUrl : "root/dispatchcar/dispatchcarrecordcollect/weekCollect/_res/html/index.html",
                controller:'weekCollectCtrl'
            }
        }
    })
});
