var app = angular.module('payModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.payed", {
        url : "/payed",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/payed/_res/html/index.html",
                controller:"payedModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/payed/_res/html/menu.html",
                controller:"payedMenuCtrl"
            }
        }
    }).state("root.dispatchcar.payed.list[12]",{
        url:"/list[12]?id=&name=&carUser=&number=",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/list/_res/html/index.html",
                controller:'payedListCtrl'
            }
        }
    }).state("root.dispatchcar.payed.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/audit/_res/html/index.html",
                controller:'payedAuditCtrl'
            }
        }
    }).state("root.dispatchcar.payed.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/upload/_res/html/index.html",
                controller:'payedUploadCtrl'
            }
        }
    }).state("root.dispatchcar.payed.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/view/_res/html/index.html",
                controller:'payedViewCtrl'
            }
        }
    }).state("root.dispatchcar.payed.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/export/_res/html/index.html",
                controller:'payedExportCtrl'
            }
        }
    }).state("root.dispatchcar.payed.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/import/_res/html/index.html",
                controller:'payedimportCtrl'
            }
        }
    }).state("root.dispatchcar.payed.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/collect/_res/html/index.html",
                controller:'payedcollerCtrl'
            }
        }
    }).state("root.dispatchcar.payed.collectCar[12]",{
        url:"/collectCar[12]",
        views:{
            "content@root.dispatchcar.payed":{
                templateUrl : "root/dispatchcar/payed/collectCar/_res/html/index.html",
                controller:'payedcollectCarCtrl'
            }
        }
    })
});
