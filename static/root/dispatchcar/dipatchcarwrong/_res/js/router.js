var app = angular.module('wrongModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.dipatchcarwrong", {
        url : "/dipatchcarwrong",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/dipatchcarwrong/_res/html/index.html",
                controller:"wrongModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/dipatchcarwrong/_res/html/menu.html",
                controller:"wrongMenuCtrl"
            }
        }
    }).state("root.dispatchcar.dipatchcarwrong.list[12]",{
        url:"/list[12]?id=&name=&carUser=&number=",
        views:{
            "content@root.dispatchcar.dipatchcarwrong":{
                templateUrl : "root/dispatchcar/dipatchcarwrong/list/_res/html/index.html",
                controller:'wrongListCtrl'
            }
        }
    }).state("root.dispatchcar.dipatchcarwrong.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dipatchcarwrong":{
                templateUrl : "root/dispatchcar/dipatchcarwrong/upload/_res/html/index.html",
                controller:'wrongUploadCtrl'
            }
        }
    }).state("root.dispatchcar.dipatchcarwrong.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.dispatchcar.dipatchcarwrong":{
                templateUrl : "root/dispatchcar/dipatchcarwrong/view/_res/html/index.html",
                controller:'wrongViewCtrl'
            }
        }
    }).state("root.dispatchcar.dipatchcarwrong.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.dispatchcar.dipatchcarwrong":{
                templateUrl : "root/dispatchcar/dipatchcarwrong/export/_res/html/index.html",
                controller:'wrongExportCtrl'
            }
        }
    }).state("root.dispatchcar.dipatchcarwrong.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.dispatchcar.dipatchcarwrong":{
                templateUrl : "root/dispatchcar/dipatchcarwrong/import/_res/html/index.html",
                controller:'wrongimportCtrl'
            }
        }
    }).state("root.dispatchcar.dipatchcarwrong.mail[12]",{
        url:"/mail[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dipatchcarwrong":{
                templateUrl : "root/dispatchcar/dipatchcarwrong/mail/_res/html/index.html",
                controller:'wrongMailCtrl'
            }
        }
    })
});
