var app = angular.module('infoModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.dispatchcarinfo", {
        url : "/dispatchcarinfo",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/dispatchcarinfo/_res/html/index.html",
                controller:"infoModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/dispatchcarinfo/_res/html/menu.html",
                controller:"infoMenuCtrl"
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.list[12]",{
        url:"/list[12]?id=&name=&page=&carUser=&number=",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/list/_res/html/index.html",
                controller:'infoListCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/add/_res/html/index.html",
                controller:'infoAddCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/edit/_res/html/index.html",
                controller:'infoEditCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/upload/_res/html/index.html",
                controller:'infoUploadCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/view/_res/html/index.html",
                controller:'infoViewCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/export/_res/html/index.html",
                controller:'infoExportCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/import/_res/html/index.html",
                controller:'infoimportCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.mail[12]",{
        url:"/mail[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/mail/_res/html/index.html",
                controller:'infoMailCtrl'
            }
        }
    }).state("root.dispatchcar.dispatchcarinfo.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.dispatchcarinfo":{
                templateUrl : "root/dispatchcar/dispatchcarinfo/audit/_res/html/index.html",
                controller:'infoAuditCtrl'
            }
        }
    })
});
