var app = angular.module('payModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.waitpay", {
        url : "/waitpay",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/waitpay/_res/html/index.html",
                controller:"payModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/waitpay/_res/html/menu.html",
                controller:"payMenuCtrl"
            }
        }
    }).state("root.dispatchcar.waitpay.list[12]",{
        url:"/list[12]?id=&name=&carUser=&number=",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/list/_res/html/index.html",
                controller:'payListCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/audit/_res/html/index.html",
                controller:'payAuditCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.pay[12]",{
        url:"/pay[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/pay/_res/html/index.html",
                controller:'paypayCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.change[12]",{
        url:"/change[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/change/_res/html/index.html",
                controller:'changeCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.principalsugg[12]",{
        url:"/principalsugg[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/principalsugg/_res/html/index.html",
                controller:'payprincipalsuggCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.payMoney[12]",{
        url:"/payMoney[12]",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/payMoney/_res/html/index.html",
                controller:'payMoneyCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/view/_res/html/index.html",
                controller:'payViewCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/export/_res/html/index.html",
                controller:'payExportCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/import/_res/html/index.html",
                controller:'payimportCtrl'
            }
        }
    }).state("root.dispatchcar.waitpay.mail[12]",{
        url:"/mail[12]",
        views:{
            "content@root.dispatchcar.waitpay":{
                templateUrl : "root/dispatchcar/waitpay/mail/_res/html/index.html",
                controller:'payMailCtrl'
            }
        }
    })
});
