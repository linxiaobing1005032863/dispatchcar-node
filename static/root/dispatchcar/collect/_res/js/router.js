var app = angular.module('collectModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.collect", {
        url : "/collect",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/collect/_res/html/index.html",
                controller:"collectCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/collect/_res/html/menu.html",
                controller:"collCtrl"
            }
        }
    }).state("root.dispatchcar.collect.dispatchCollect[12]",{
        url:"/dispatchCollect[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/dispatchCollect/_res/html/index.html",
                controller:'dispatchCollectCtrl'
            }
        }
    }).state("root.dispatchcar.collect.driverCollect[12]",{
        url:"/driverCollect[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/driverCollect/_res/html/index.html",
                controller:'driverCollectCtrl'
            }
        }
    }).state("root.dispatchcar.collect.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/export/_res/html/index.html",
                controller:'exportCollectCtrl'
            }
        }
    }).state("root.dispatchcar.collect.weekExport[12]",{
        url:"/weekExport[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/weekExport/_res/html/index.html",
                controller:'weekExportCtrl'
            }
        }
    }).state("root.dispatchcar.collect.monthExport[12]",{
        url:"/monthExport[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/monthExport/_res/html/index.html",
                controller:'monthExportCtrl'
            }
        }
    }).state("root.dispatchcar.collect.quarterExport[12]",{
        url:"/quarterExport[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/quarterExport/_res/html/index.html",
                controller:'quarterExportCtrl'
            }
        }
    }).state("root.dispatchcar.collect.yearExport[12]",{
        url:"/yearExport[12]",
        views:{
            "content@root.dispatchcar.collect":{
                templateUrl : "root/dispatchcar/collect/yearExport/_res/html/index.html",
                controller:'yearExportCtrl'
            }
        }
    })
});
